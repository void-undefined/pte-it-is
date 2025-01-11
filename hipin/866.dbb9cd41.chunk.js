'use strict';
(self.webpackChunkpinai_react = self.webpackChunkpinai_react || []).push([
  [866],
  {
    12855: (e, t, n) => {
      n.d(t, { A: () => a });
      n(65043);
      const a = n.p + 'static/media/frame.0f6a4bc6962cf80834ba875ec6cc9cbe.svg';
    },
    87187: (e, t, n) => {
      n.d(t, { A: () => a });
      n(65043);
      const a = n.p + 'static/media/ic-arrow-right-mini.0e39b22544be36928384956a1f807658.svg';
    },
    17813: (e, t, n) => {
      n.r(t), n.d(t, { default: () => h });
      var a = n(65043),
        s = n(20409),
        o = n(73216);
      n(77156);
      n.p;
      n(87187);
      var c = n(70579);
      n(81574);
      n.p, n.p;
      n(12855);
      n.p;
      n.p, n.p;
      n(53728);
      var i = n(2222),
        r = n(39985),
        l = n(75999),
        p = n(80683),
        x = n(70414),
        d = n(74117),
        m = n(16359);
      const u = (e) => {
        let { onFinish: t } = e;
        const { t: n, i18n: s } = (0, d.Bd)(),
          [u, f] = (0, a.useState)(!1),
          [h, v] = (0, a.useState)(1),
          y = (0, o.Zp)(),
          [g, b] = (0, a.useState)(r);
        (0, a.useEffect)(() => {
          2 == h
            ? (k(n('Connect Data')),
              S(
                n(
                  '1- Connect your accounts from various apps to earn PIN points. The more you connect, the more you earn.'
                )
              ),
              b(i))
            : 3 == h
            ? (k(n('Complete Tasks')),
              S(n('You can earn more PIN points by completing tasks such as daily check-ins.')),
              b(l))
            : 4 == h
            ? (k(n('Invite friends')),
              S(
                n(
                  'Invite your friends to join us and unlock countless benefits together! Share the experience, earn rewards, and enjoy exclusive features.'
                )
              ),
              b(p))
            : h > 4 && t();
        }, [h]);
        const [j, k] = (0, a.useState)(n('Say Hello to "Hi PIN"')),
          [N, S] = (0, a.useState)(
            n(
              'Hi PIN is your personal AI assistant, dedicated to meeting your needs. Simply click to access Hi PIN and unlock its full potential.'
            )
          );
        return (0, c.jsxs)('div', {
          className: 'w-screen h-screen flex flex-col items-center items-start',
          style: {
            backgroundImage: 'url('.concat(m, ')'),
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
          },
          children: [
            (0, c.jsxs)('div', {
              className: 'relative h-full w-[310px] ',
              children: [
                (0, c.jsxs)('div', {
                  className:
                    "mt-[130px] text-element-active-text text-2xl font-medium font-['SF Pro Display'] text-center",
                  children: [j, ' '],
                }),
                (0, c.jsx)('p', {
                  className:
                    "opacity-80 text-center text-element-active-text text-lg font-normal font-['SF Pro Display'] leading-snug",
                  children: N,
                }),
                2 == h &&
                  (0, c.jsx)('p', {
                    className:
                      "opacity-80 text-center text-element-active-text text-lg font-normal font-['SF Pro Display'] leading-snug",
                    children: n(
                      '2- Upgrade each data connector to boost your PIN power score and increase your earnings even further!'
                    ),
                  }),
                2 == h &&
                  (0, c.jsx)('div', {
                    className:
                      "text-center underline text-element-link-color text-lg font-normal font-['SF Pro Display'] leading-snug",
                    onClick: () => {
                      f(!0);
                    },
                    children: n('Will my data be secure?'),
                  }),
                g &&
                  (0, c.jsx)('img', {
                    src: g,
                    alt: 'Coin',
                    className: 'mt-[10vh] mx-auto w-[300px] h-[300px] object-contain',
                  }),
                (0, c.jsxs)('div', {
                  className:
                    'fixed w-[295px] ml-[7px] h-[45px] px-6  bottom-5 gradient-button rounded-xl shadow justify-center items-center gap-2.5 inline-flex',
                  onClick: () => {
                    b(''), v((e) => e + 1);
                  },
                  children: [
                    (0, c.jsx)('div', {
                      className: 'absolute bottom-[60px] w-full text-center',
                      children: (0, c.jsx)('a', {
                        href: '/protocol?type=privacy',
                        className:
                          'text-element-inactive-text text-xs hover:text-element-active-text transition-colors duration-200',
                        onClick: (e) => {
                          e.preventDefault(), y('/protocol?type=privacy');
                        },
                        children: n('Privacy Policy'),
                      }),
                    }),
                    (0, c.jsx)('div', {
                      className: "text-element-btn-text text-sm font-medium font-['SF Pro Display']",
                      children: n('Continue'),
                    }),
                  ],
                }),
              ],
            }),
            (0, c.jsx)(x.A, {
              isOpen: u,
              onClose: () => {
                f(!1);
              },
            }),
          ],
        });
      };
      var f = n(21941);
      const h = () => {
        const [e, t] = (0, a.useState)(!0),
          n = (0, o.Zp)();
        (0, a.useEffect)(() => {
          setTimeout(() => {
            t(!1);
            '1' === localStorage.getItem('is_onboard_complete') && n('/main', { replace: !0 });
          }, 2e3);
        }, []);
        return (0, c.jsx)(f.O, {
          children: e
            ? (0, c.jsx)(s.g, {})
            : (0, c.jsx)(u, {
                onFinish: () => {
                  localStorage.setItem('is_onboard_complete', '1'), n('/main', { replace: !0 });
                },
              }),
        });
      };
    },
  },
]);
