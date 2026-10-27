/* =========================================================
   Nuka Raju & Dilleswari · Engagement Invitation
   Vanilla JS, no dependencies.
   ========================================================= */
(function () {
  'use strict';

  /* ---------- Configuration ---------- */

  var CONFIG = {
    // Event start: Sunday 1 November 2026, 11:00 AM IST (UTC+05:30) = 05:30 UTC.
    eventStartUTC: Date.UTC(2026, 10, 1, 5, 30),
    eventDayUTC: Date.UTC(2026, 10, 1),
    eventTimezoneOffsetMinutes: 330,

    // Background music is OFF and hidden until a licensed audio file is added.
    // To enable: place the file at `src`, then set enabled: true (see README).
    music: {
      enabled: false,
      src: 'assets/audio/soft-instrumental.mp3',
      volume: 0.3
    },

    doorOpenMs: 1050,   // time for the panels to swing open
    doorLeaveMs: 1000,  // fade/zoom through the doorway
    storageKey: 'invite-lang'
  };

  /* ---------- Translations (single source for all copy) ---------- */

  var translations = {
    en: {
      pageTitle: 'Nuka Raju & Dilleswari · Engagement Invitation',
      metaDescription: 'You are warmly invited to the engagement ceremony of Nuka Raju & Dilleswari on Sunday, 1 November 2026, 11:00 AM onwards at RK Function Hall, Sujatha Nagar, opposite HP Petrol Bunk.',
      languageLabel: 'Language',
      navLabel: 'Sections',
      backToTop: 'Back to top',
      navHome: 'Home',
      navInvite: 'Invitation',
      navFamilies: 'Families',
      navDate: 'Date',
      navVenue: 'Venue',
      doorLabel: 'Open your invitation',
      openTitle: 'Open Your Invitation',
      openHint: 'Tap the doors to begin',
      skipIntro: 'Skip intro · View invitation',
      eyebrow: 'With the blessings of our families',
      coupleNative: '',
      ceremony: 'Engagement Ceremony',
      scrollCue: 'Scroll to see the invitation',
      inviteTitle: 'You Are Invited',
      invitation: 'We warmly invite you to grace our engagement ceremony with your presence and blessings, and to make our happiness all the more special.',
      dateValue: 'Sunday, 1 November 2026',
      timeValue: '11:00 AM onwards',
      weekday: 'Sunday',
      monthYear: 'November 2026',
      familiesTitle: 'The Families',
      groomLabel: 'The Groom',
      groomName: 'Nuka Raju',
      groomParents: 'Son of Shri Gandreddi Ramu & Smt. Applanarasamma',
      brideLabel: 'The Bride',
      brideName: 'Dilleswari',
      brideParents: 'Daughter of Shri Sathi Babu & Smt. Ravanamma',
      whenTitle: 'Save the Date',
      dateLabel: 'Date',
      timeLabel: 'Time',
      venueTitle: 'Venue & Directions',
      venueLabel: 'Venue',
      venueName: 'RK Function Hall',
      venueAddress: 'Sujatha Nagar, opposite HP Petrol Bunk',
      countdownCaption: 'Counting down to the celebration',
      unitDays: 'Days',
      unitHours: 'Hours',
      unitMinutes: 'Minutes',
      countdownToday: 'The celebration day has arrived',
      countdownPast: 'Thank you for celebrating with us',
      addGoogle: 'Add to Google Calendar',
      addIcs: 'Apple / Outlook (.ics)',
      directions: 'Get Directions',
      openMaps: 'View on Google Maps',
      copyAddress: 'Copy address',
      addressCopied: 'Address copied',
      newTab: '(opens in a new tab)',
      mapTitle: 'Map showing RK Function Hall, Sujatha Nagar, opposite HP Petrol Bunk',
      closing: 'Your presence and blessings will make our day even more special.',
      shareLabel: 'Share this invitation with family & friends',
      shareWhatsapp: 'Share on WhatsApp',
      share: 'Share invitation',
      copyLink: 'Copy link',
      thanks: 'With love and gratitude',
      shareTitle: 'Engagement Invitation · Nuka Raju & Dilleswari',
      shareText: 'You are invited to the engagement ceremony of Nuka Raju & Dilleswari: Sunday, 1 November 2026, 11:00 AM onwards, RK Function Hall, Sujatha Nagar, opposite HP Petrol Bunk.',
      copied: 'Invitation link copied',
      copyFailed: 'Could not copy. Please copy it from the address bar.',
      musicOn: 'Turn music on',
      musicOff: 'Turn music off',
      musicError: 'Music could not start. Please try again.'
    },

    /* Telugu copy. Personal-name spellings (groomName, brideName, coupleNative)
       should be confirmed by the family before publishing. */
    te: {
      pageTitle: 'నూకరాజు & దిల్లేశ్వరి · నిశ్చితార్థ ఆహ్వానం',
      metaDescription: 'ఆదివారం, 1 నవంబర్ 2026, ఉదయం 11:00 గంటల నుండి, ఆర్.కె. ఫంక్షన్ హాల్, సుజాత నగర్, హెచ్.పీ. పెట్రోల్ బంక్ ఎదురుగా జరిగే నిశ్చితార్థ మహోత్సవానికి మీకు సాదర ఆహ్వానం.',
      languageLabel: 'భాష',
      navLabel: 'విభాగాలు',
      backToTop: 'పైకి వెళ్ళండి',
      navHome: 'ప్రారంభం',
      navInvite: 'ఆహ్వానం',
      navFamilies: 'కుటుంబాలు',
      navDate: 'తేదీ',
      navVenue: 'వేదిక',
      doorLabel: 'ఆహ్వాన పత్రికను తెరవండి',
      openTitle: 'ఆహ్వాన పత్రికను తెరవండి',
      openHint: 'ఆహ్వానాన్ని చూడటానికి తలుపులను తాకండి',
      skipIntro: 'నేరుగా ఆహ్వాన పత్రికను చూడండి',
      eyebrow: 'పెద్దల ఆశీస్సులతో',
      coupleNative: 'నూకరాజు & దిల్లేశ్వరి',
      ceremony: 'నిశ్చితార్థ మహోత్సవం',
      scrollCue: 'ఆహ్వానం కోసం కిందకు జరపండి',
      inviteTitle: 'సాదర ఆహ్వానం',
      invitation: 'మా నిశ్చితార్థ వేడుకకు విచ్చేసి మీ ఆశీస్సులు అందించి, మా ఆనందాన్ని మరింత ప్రత్యేకం చేయవలసిందిగా మనస్ఫూర్తిగా ఆహ్వానిస్తున్నాము.',
      dateValue: 'ఆదివారం, 1 నవంబర్ 2026',
      timeValue: 'ఉదయం 11:00 గంటల నుండి',
      weekday: 'ఆదివారం',
      monthYear: 'నవంబర్ 2026',
      familiesTitle: 'ఇరు కుటుంబాలు',
      groomLabel: 'వరుడు',
      groomName: 'నూకరాజు',
      groomParents: 'శ్రీ గండ్రెడ్డి రాము గారు మరియు శ్రీమతి అప్పలనరసమ్మ గారి కుమారుడు',
      brideLabel: 'వధువు',
      brideName: 'దిల్లేశ్వరి',
      brideParents: 'శ్రీ సత్తిబాబు గారు మరియు శ్రీమతి రావణమ్మ గారి కుమార్తె',
      whenTitle: 'తేదీ & సమయం',
      dateLabel: 'తేదీ',
      timeLabel: 'సమయం',
      venueTitle: 'వేదిక & దారి',
      venueLabel: 'వేదిక',
      venueName: 'ఆర్.కె. ఫంక్షన్ హాల్',
      venueAddress: 'సుజాత నగర్, హెచ్.పీ. పెట్రోల్ బంక్ ఎదురుగా',
      countdownCaption: 'శుభ వేడుకకు మిగిలిన సమయం',
      unitDays: 'రోజులు',
      unitHours: 'గంటలు',
      unitMinutes: 'నిమిషాలు',
      countdownToday: 'వేడుక రోజు రానే వచ్చింది',
      countdownPast: 'మాతో కలిసి వేడుక జరుపుకున్నందుకు ధన్యవాదాలు',
      addGoogle: 'Google క్యాలెండర్‌లో చేర్చండి',
      addIcs: 'Apple / Outlook క్యాలెండర్ (.ics)',
      directions: 'దారి చూపించండి',
      openMaps: 'గూగుల్ మ్యాప్స్‌లో చూడండి',
      copyAddress: 'చిరునామా కాపీ చేయండి',
      addressCopied: 'చిరునామా కాపీ అయింది',
      newTab: '(కొత్త ట్యాబ్‌లో తెరుచుకుంటుంది)',
      mapTitle: 'ఆర్.కె. ఫంక్షన్ హాల్, సుజాత నగర్, హెచ్.పీ. పెట్రోల్ బంక్ ఎదురుగా ఉన్న ప్రదేశాన్ని చూపించే మ్యాప్',
      closing: 'మీ రాక, ఆశీస్సులు మా జీవితంలోని ఈ ప్రత్యేక రోజును మరింత మధురంగా మారుస్తాయి.',
      shareLabel: 'ఈ ఆహ్వానాన్ని బంధుమిత్రులతో పంచుకోండి',
      shareWhatsapp: 'వాట్సాప్‌లో పంపండి',
      share: 'ఆహ్వాన పత్రికను పంచుకోండి',
      copyLink: 'లింక్ కాపీ చేయండి',
      thanks: 'ప్రేమతో, కృతజ్ఞతతో',
      shareTitle: 'నిశ్చితార్థ ఆహ్వానం · నూకరాజు & దిల్లేశ్వరి',
      shareText: 'నూకరాజు & దిల్లేశ్వరి నిశ్చితార్థ మహోత్సవానికి ఆహ్వానం: ఆదివారం, 1 నవంబర్ 2026, ఉదయం 11:00 గంటల నుండి, ఆర్.కె. ఫంక్షన్ హాల్, సుజాత నగర్, హెచ్.పీ. పెట్రోల్ బంక్ ఎదురుగా.',
      copied: 'ఆహ్వాన లింక్ కాపీ అయింది',
      copyFailed: 'కాపీ కాలేదు. దయచేసి అడ్రస్ బార్ నుండి కాపీ చేయండి.',
      musicOn: 'సంగీతం ఆన్ చేయండి',
      musicOff: 'సంగీతం ఆఫ్ చేయండి',
      musicError: 'సంగీతం ప్రారంభం కాలేదు. దయచేసి మళ్ళీ ప్రయత్నించండి.'
    }
  };

  /* ---------- Shared state ---------- */

  var root = document.documentElement;
  var state = {
    lang: 'en',
    opened: false,
    musicPlaying: false
  };
  var reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

  function t(key) {
    var dict = translations[state.lang] || translations.en;
    return key in dict ? dict[key] : translations.en[key];
  }

  function $(sel) { return document.querySelector(sel); }
  function $all(sel) { return Array.prototype.slice.call(document.querySelectorAll(sel)); }

  /* =========================================================
     Language switching
     ========================================================= */

  function initialLanguage() {
    var param = null;
    try { param = new URLSearchParams(window.location.search).get('lang'); } catch (e) { /* ignore */ }
    if (param && translations[param]) return param;
    try {
      var saved = window.sessionStorage.getItem(CONFIG.storageKey);
      if (saved && translations[saved]) return saved;
    } catch (e) { /* storage unavailable */ }
    return 'en';
  }

  function applyLanguage(lang) {
    if (!translations[lang]) lang = 'en';
    state.lang = lang;
    root.setAttribute('lang', lang);

    $all('[data-i18n]').forEach(function (el) {
      var value = t(el.getAttribute('data-i18n'));
      if (typeof value === 'string') el.textContent = value;
    });

    $all('[data-i18n-attr]').forEach(function (el) {
      el.getAttribute('data-i18n-attr').split(';').forEach(function (pair) {
        var parts = pair.split(':');
        if (parts.length === 2) el.setAttribute(parts[0].trim(), t(parts[1].trim()));
      });
    });

    // Elements whose content changes script (e.g. names) get a matching lang.
    $all('[data-i18n-lang]').forEach(function (el) { el.setAttribute('lang', lang); });

    // Elements shown only in one language.
    $all('[data-i18n-visible]').forEach(function (el) {
      el.hidden = el.getAttribute('data-i18n-visible') !== lang;
    });

    $all('.lang-toggle__btn').forEach(function (btn) {
      btn.setAttribute('aria-pressed', String(btn.getAttribute('data-lang') === lang));
    });

    document.title = t('pageTitle');
    var meta = $('meta[name="description"]');
    if (meta) meta.setAttribute('content', t('metaDescription'));

    updateMusicLabel();
    renderCountdown();
    updateShareLinks();

    try { window.sessionStorage.setItem(CONFIG.storageKey, lang); } catch (e) { /* ignore */ }
  }

  function initLanguage() {
    $all('.lang-toggle__btn').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var lang = btn.getAttribute('data-lang');
        if (lang !== state.lang) applyLanguage(lang);
      });
    });
    applyLanguage(initialLanguage());
  }

  /* =========================================================
     Door / entrance
     ========================================================= */

  var entrance, doorButton, invitation, heroTitle;

  function initDoor() {
    entrance = $('#entrance');
    doorButton = $('#door-button');
    invitation = $('#invitation');
    heroTitle = $('#hero-title');
    if (!entrance || !doorButton || !invitation) return;

    // If the safety fallback already revealed the page, don't bring the door back.
    if (window.__inviteFallbackFired) {
      finishOpening();
      return;
    }

    invitation.inert = true;

    // A native <button> already handles click, touch, Enter and Space.
    doorButton.addEventListener('click', function () { openInvitation(true); });
    $('#skip-intro').addEventListener('click', function () { openInvitation(false); });
  }

  function openInvitation(animate) {
    if (state.opened) return;
    state.opened = true;
    doorButton.setAttribute('aria-expanded', 'true');

    if (!animate || reducedMotion.matches) {
      finishOpening();
      return;
    }

    entrance.classList.add('is-opening');
    window.setTimeout(burstSparkles, 450);
    window.setTimeout(function () {
      entrance.classList.add('is-leaving');
      revealInvitation();
      window.setTimeout(finishOpening, CONFIG.doorLeaveMs);
    }, CONFIG.doorOpenMs);
  }

  function revealInvitation() {
    invitation.inert = false;
    root.classList.remove('is-locked');
    invitation.classList.add('is-revealed');
    entrance.inert = true;
    if (heroTitle) heroTitle.focus({ preventScroll: true });
  }

  function finishOpening() {
    state.opened = true;
    revealInvitation();
    entrance.hidden = true;   // removed from tab order and accessibility tree
    window.scrollTo(0, 0);
    startPetals();
  }

  function burstSparkles() {
    var layer = $('#sparkles');
    if (!layer) return;
    var count = window.innerWidth < 600 ? 16 : 24;
    for (var i = 0; i < count; i++) {
      var s = document.createElement('span');
      var angle = (Math.PI * 2 * i) / count + Math.random() * 0.4;
      var dist = 90 + Math.random() * Math.min(window.innerWidth, 700) * 0.45;
      s.className = 'sparkle';
      s.style.setProperty('--x', (Math.cos(angle) * dist).toFixed(0) + 'px');
      s.style.setProperty('--y', (Math.sin(angle) * dist * 0.8).toFixed(0) + 'px');
      s.style.setProperty('--s', (4 + Math.random() * 5).toFixed(1) + 'px');
      s.style.setProperty('--delay', (Math.random() * 220).toFixed(0) + 'ms');
      layer.appendChild(s);
    }
  }

  /* =========================================================
     Top bar, progress, active section
     ========================================================= */

  function initScrollChrome() {
    var bar = $('#topbar');
    var dock = $('#dock');
    var progress = $('#progress-bar');
    var lastY = window.scrollY;
    var ticking = false;

    function update() {
      var y = window.scrollY;
      var max = document.documentElement.scrollHeight - window.innerHeight;
      if (progress) progress.style.transform = 'scaleX(' + (max > 0 ? Math.min(1, y / max) : 0) + ')';
      if (bar) {
        bar.classList.toggle('is-scrolled', y > 40);
        if (y < 140 || y < lastY - 6) bar.classList.remove('is-tucked');
        else if (y > lastY + 6) bar.classList.add('is-tucked');
      }
      // the hero gets the whole screen; the dock appears once the visitor moves on
      if (dock) dock.classList.toggle('is-hidden', y < window.innerHeight * 0.5);
      lastY = y;
      ticking = false;
    }

    window.addEventListener('scroll', function () {
      if (!ticking) { ticking = true; window.requestAnimationFrame(update); }
    }, { passive: true });
    update();

    // Highlight the section currently in view in both navs.
    if (!('IntersectionObserver' in window)) return;
    var links = $all('[data-nav]');
    var sectionIds = ['top', 'invite', 'families', 'when', 'venue'];
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        var id = entry.target.id;
        // the dock has no "invite" item, so treat it as part of Home
        var dockId = id === 'invite' ? 'top' : id;
        links.forEach(function (a) {
          var target = a.getAttribute('data-nav');
          var inDock = !!a.closest('.dock');
          var active = inDock ? target === dockId : target === id;
          if (active) a.setAttribute('aria-current', 'true');
          else a.removeAttribute('aria-current');
        });
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    sectionIds.forEach(function (id) {
      var el = document.getElementById(id);
      if (el) spy.observe(el);
    });
  }

  /* =========================================================
     Scroll reveal
     ========================================================= */

  function initReveal() {
    var items = $all('.reveal, [data-reveal]');
    if (!('IntersectionObserver' in window)) {
      items.forEach(function (el) { el.classList.add('is-visible'); });
      return;
    }
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' });
    items.forEach(function (el) { observer.observe(el); });
  }

  /* =========================================================
     Countdown (days / hours / minutes; based on the visitor's clock)
     ========================================================= */

  function daysUntilEventDay(nowMs) {
    // Compare calendar days in the event's own time zone (IST).
    var local = new Date(nowMs + CONFIG.eventTimezoneOffsetMinutes * 60000);
    var today = Date.UTC(local.getUTCFullYear(), local.getUTCMonth(), local.getUTCDate());
    return Math.round((CONFIG.eventDayUTC - today) / 86400000);
  }

  function renderCountdown() {
    var box = $('#countdown');
    if (!box) return;
    var grid = $('#countdown-grid');
    var caption = $('#countdown-caption');
    var message = $('#countdown-message');
    var now = Date.now();
    var remaining = CONFIG.eventStartUTC - now;

    box.hidden = false;
    if (remaining > 0) {
      var mins = Math.floor(remaining / 60000);
      var values = { days: Math.floor(mins / 1440), hours: Math.floor((mins % 1440) / 60), minutes: mins % 60 };
      $all('.countdown__num').forEach(function (el) {
        var v = values[el.getAttribute('data-unit')];
        el.textContent = v < 10 && el.getAttribute('data-unit') !== 'days' ? '0' + v : String(v);
      });
      grid.hidden = false;
      caption.hidden = false;
      message.hidden = true;
    } else {
      grid.hidden = true;
      caption.hidden = true;
      message.textContent = daysUntilEventDay(now) === 0 ? t('countdownToday') : t('countdownPast');
      message.hidden = false;
    }
  }

  function initCountdown() {
    renderCountdown();
    // Minute-level precision: a calm refresh every 30 seconds, no ticking seconds.
    window.setInterval(renderCountdown, 30000);
  }

  /* =========================================================
     Background music (opt-in only)
     ========================================================= */

  var audio = null;
  var musicButton = null;

  function initMusic() {
    musicButton = $('#music-toggle');
    if (!musicButton || !CONFIG.music.enabled) return;   // stays hidden: no licensed track yet

    audio = new Audio();
    audio.src = CONFIG.music.src;
    audio.preload = 'none';
    audio.loop = true;
    audio.volume = CONFIG.music.volume;

    audio.addEventListener('error', function () {
      stopMusic();
      musicButton.hidden = true;           // never leave a broken control on screen
    });

    musicButton.hidden = false;
    musicButton.addEventListener('click', function () {
      if (state.musicPlaying) stopMusic();
      else playMusic();
    });
    updateMusicLabel();
  }

  function playMusic() {
    var result = audio.play();
    state.musicPlaying = true;
    updateMusicLabel();
    if (result && typeof result.catch === 'function') {
      result.catch(function () {
        state.musicPlaying = false;
        updateMusicLabel();
        showToast(t('musicError'));
      });
    }
  }

  function stopMusic() {
    if (audio) audio.pause();
    state.musicPlaying = false;
    updateMusicLabel();
  }

  function updateMusicLabel() {
    if (!musicButton) return;
    var label = state.musicPlaying ? t('musicOff') : t('musicOn');
    musicButton.setAttribute('aria-label', label);
    musicButton.setAttribute('data-playing', String(state.musicPlaying));
    var text = musicButton.querySelector('.music-toggle__label');
    if (text) text.textContent = label;
  }

  /* =========================================================
     Toast, share, copy
     ========================================================= */

  var toastTimer = null;

  function showToast(message) {
    var el = $('#toast');
    if (!el) return;
    el.textContent = message;
    el.classList.add('is-visible');
    window.clearTimeout(toastTimer);
    toastTimer = window.setTimeout(function () {
      el.classList.remove('is-visible');
      window.setTimeout(function () { if (!el.classList.contains('is-visible')) el.textContent = ''; }, 300);
    }, 3200);
  }

  function shareUrl() {
    var url = window.location.href.split('#')[0].split('?')[0];
    return state.lang === 'en' ? url : url + '?lang=' + state.lang;
  }

  function updateShareLinks() {
    var wa = $('#whatsapp-link');
    if (wa) wa.href = 'https://wa.me/?text=' + encodeURIComponent(t('shareText') + '\n' + shareUrl());
  }

  function copyText(text) {
    if (navigator.clipboard && window.isSecureContext) {
      return navigator.clipboard.writeText(text);
    }
    return new Promise(function (resolve, reject) {
      var area = document.createElement('textarea');
      area.value = text;
      area.setAttribute('readonly', '');
      area.style.position = 'fixed';
      area.style.opacity = '0';
      document.body.appendChild(area);
      area.select();
      var ok = false;
      try { ok = document.execCommand('copy'); } catch (e) { ok = false; }
      document.body.removeChild(area);
      if (ok) resolve(); else reject(new Error('copy failed'));
    });
  }

  function copyWithToast(text, successKey) {
    copyText(text).then(
      function () { showToast(t(successKey)); },
      function () { showToast(t('copyFailed')); }
    );
  }

  function initShare() {
    var shareBlock = $('#share');
    if (shareBlock) shareBlock.hidden = false;

    var shareButton = $('#share-button');
    if (shareButton) {
      shareButton.addEventListener('click', function () {
        var url = shareUrl();
        var data = { title: t('shareTitle'), text: t('shareText'), url: url };
        if (navigator.share && (!navigator.canShare || navigator.canShare(data))) {
          navigator.share(data).catch(function (err) {
            if (!err || err.name !== 'AbortError') copyWithToast(url, 'copied');
          });
        } else {
          copyWithToast(url, 'copied');
        }
      });
    }

    var copyLinkButton = $('#copy-link');
    if (copyLinkButton) {
      copyLinkButton.addEventListener('click', function () { copyWithToast(shareUrl(), 'copied'); });
    }

    var copyAddressButton = $('#copy-address');
    if (copyAddressButton) {
      copyAddressButton.hidden = false;
      copyAddressButton.addEventListener('click', function () {
        copyWithToast(t('venueName') + ', ' + t('venueAddress'), 'addressCopied');
      });
    }
    updateShareLinks();
  }

  /* =========================================================
     Petals: a brief, sparse shower in the side margins (wide screens only)
     ========================================================= */

  function startPetals() {
    var layer = $('#petals');
    var saveData = navigator.connection && navigator.connection.saveData;
    if (!layer || layer.childElementCount || reducedMotion.matches || saveData || window.innerWidth < 900) return;

    for (var i = 0; i < 10; i++) {
      var petal = document.createElement('span');
      var leftSide = i % 2 === 0;
      var x = leftSide ? 1 + Math.random() * 9 : 90 + Math.random() * 9;
      petal.className = 'petal' + (i % 3 === 0 ? ' petal--rose' : '');
      petal.style.left = x + '%';
      petal.style.setProperty('--dur', (11 + Math.random() * 6).toFixed(1) + 's');
      petal.style.setProperty('--delay', (Math.random() * 6).toFixed(1) + 's');
      petal.style.setProperty('--drift', (leftSide ? 1 : -1) * (20 + Math.random() * 40) + 'px');
      layer.appendChild(petal);
    }
    // Remove the layer once the short shower is over.
    window.setTimeout(function () { layer.textContent = ''; }, 42000);
  }

  /* =========================================================
     Boot
     ========================================================= */

  function init() {
    window.clearTimeout(window.__inviteFallback);
    initMusic();
    initLanguage();
    initDoor();
    initReveal();
    initScrollChrome();
    initCountdown();
    initShare();
    window.__inviteReady = true;
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
