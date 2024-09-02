// https://resend.com/emails

import { Resend } from 'resend';

const resend = new Resend('re_X5MefAjx_EqHNLMbaXkhY1PCKpqFph7qK');

(async function () {
  const { data, error } = await resend.emails.send({
    from: 'Acme <onboarding@resend.dev>',
    to: ['lautarodm98@gmail.com'],
    subject: 'Saludos desde codigo de Resend',
    html: '<strong>Funciona!</strong>',
  });

  console.log(data)

  if (error) {
    return console.error({ error });
  }

  console.log({ data });
})();