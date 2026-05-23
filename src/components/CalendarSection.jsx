import { useEffect } from 'react';
import {
  FaCalendarCheck,
  FaClock,
  FaVideo,
  FaShieldAlt
} from 'react-icons/fa';

function CalendarSection() {

  useEffect(() => {

    (function (C, A, L) {

      let p = function (a, ar) {
        a.q.push(ar);
      };

      let d = C.document;

      C.Cal =
        C.Cal ||
        function () {

          let cal = C.Cal;

          let ar = arguments;

          if (!cal.loaded) {

            cal.ns = {};
            cal.q = cal.q || [];

            d.head.appendChild(
              d.createElement('script')
            ).src = A;

            cal.loaded = true;
          }

          if (ar[0] === L) {

            const api = function () {
              p(api, arguments);
            };

            const namespace = ar[1];

            api.q = api.q || [];

            if (typeof namespace === 'string') {

              cal.ns[namespace] =
                cal.ns[namespace] || api;

              p(cal.ns[namespace], ar);

              p(cal, ['initNamespace', namespace]);
            }

            return;
          }

          p(cal, ar);
        };

    })(
      window,
      'https://app.cal.com/embed/embed.js',
      'init'
    );

    window.Cal('init', 'lp-soluciones-it', {
      origin: 'https://cal.com'
    });

    window.Cal.ns['lp-soluciones-it'](
      'inline',
      {
        elementOrSelector: '#cal-inline',
        calLink:
          'lp-soluciones-it-mp7ldr/consultoria-tecnica-inicial'
      }
    );

    window.Cal.ns['lp-soluciones-it'](
      'ui',
      {
        theme: 'dark',

        styles: {
          branding: {
            brandColor: '#2563eb'
          }
        },

        hideEventTypeDetails: false
      }
    );

  }, []);

  return (
    <section id="calendar" className="section calendar-section">

      <div className="container">

        <div className="calendar-header">

          <span>
            
          </span>

          <h3>
            Agendá una reunión inicial
          </h3>

          <p>
            Analicemos la infraestructura tecnológica,
            soporte, automatización y oportunidades
            de mejora para tu empresa.
          </p>

        </div>

        <div className="calendar-benefits">

          <div className="calendar-benefit">
            <FaCalendarCheck />
            <span>Agenda automática</span>
          </div>

          <div className="calendar-benefit">
            <FaClock />
            <span>15 a 30 minutos</span>
          </div>

          <div className="calendar-benefit">
            <FaVideo />
            <span>Reunión por Meet</span>
          </div>

          <div className="calendar-benefit">
            <FaShieldAlt />
            <span>Atención profesional</span>
          </div>

        </div>

        <div className="calendar-wrapper">

          <div id="cal-inline" />

        </div>

      </div>

    </section>
  );
}

export default CalendarSection;