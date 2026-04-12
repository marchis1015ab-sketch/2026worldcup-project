async function sendSMS(schedule) {
  const message = buildMessage(schedule);

  const { data: user } = await supabaseClient
    .from('profiles')
    .select('phone_number')
    .eq('name', schedule.assignee)
    .single();

  if (!user || !user.phone_number) {
    console.warn('전화번호 없음');
    return;
  }

  const phone = user.phone_number;

  console.log('📩 실제 문자 발송');

  const response = await fetch('https://dwujummgbntrtvmldqmz.supabase.co/functions/v1/dynamic-api', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      to: phone,
      text: message
    })
  });

  const result = await response.json().catch(() => ({}));
  const status = response.ok ? 'SENT' : 'FAILED';

  await supabaseClient.from('sms_logs').insert([
    {
      assignee: schedule.assignee,
      phone: phone,
      message: message,
      status: status
    }
  ]);

  if (!response.ok) {
    console.warn('문자 발송 실패:', result);
  }
}

window.sendSMS = sendSMS;
