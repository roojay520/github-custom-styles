const ICON = {
  ICON_USER: '<svg class="octicon octicon-person text-gray" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M10.5 5a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0zm.061 3.073a4 4 0 10-5.123 0 6.004 6.004 0 00-3.431 5.142.75.75 0 001.498.07 4.5 4.5 0 018.99 0 .75.75 0 101.498-.07 6.005 6.005 0 00-3.432-5.142z"></path></svg>',
  ICON_PACKAGE: '<svg class="octicon octicon-package text-gray" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8.878.392a1.75 1.75 0 00-1.756 0l-5.25 3.045A1.75 1.75 0 001 4.951v6.098c0 .624.332 1.2.872 1.514l5.25 3.045a1.75 1.75 0 001.756 0l5.25-3.045c.54-.313.872-.89.872-1.514V4.951c0-.624-.332-1.2-.872-1.514L8.878.392zM7.875 1.69a.25.25 0 01.25 0l4.63 2.685L8 7.133 3.245 4.375l4.63-2.685zM2.5 5.677v5.372c0 .09.047.171.125.216l4.625 2.683V8.432L2.5 5.677zm6.25 8.271l4.625-2.683a.25.25 0 00.125-.216V5.677L8.75 8.432v5.516z"></path></svg>',
  ICON_TAG: '<svg class="octicon octicon-tag text-gray" viewBox="0 0 16 16" version="1.1" width="16" aria-hidden="true"><path fill-rule="evenodd" d="M2.5 7.775V2.75a.25.25 0 01.25-.25h5.025a.25.25 0 01.177.073l6.25 6.25a.25.25 0 010 .354l-5.025 5.025a.25.25 0 01-.354 0l-6.25-6.25a.25.25 0 01-.073-.177zm-1.5 0V2.75C1 1.784 1.784 1 2.75 1h5.025c.464 0 .91.184 1.238.513l6.25 6.25a1.75 1.75 0 010 2.474l-5.026 5.026a1.75 1.75 0 01-2.474 0l-6.25-6.25A1.75 1.75 0 011 7.775zM6 5a1 1 0 100 2 1 1 0 000-2z"></path></svg>',
  ICON_USERS: '<svg class="octicon octicon-people text-gray" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M5.5 3.5a2 2 0 100 4 2 2 0 000-4zM2 5.5a3.5 3.5 0 115.898 2.549 5.507 5.507 0 013.034 4.084.75.75 0 11-1.482.235 4.001 4.001 0 00-7.9 0 .75.75 0 01-1.482-.236A5.507 5.507 0 013.102 8.05 3.49 3.49 0 012 5.5zM11 4a.75.75 0 100 1.5 1.5 1.5 0 01.666 2.844.75.75 0 00-.416.672v.352a.75.75 0 00.574.73c1.2.289 2.162 1.2 2.522 2.372a.75.75 0 101.434-.44 5.01 5.01 0 00-2.56-3.012A3 3 0 0011 4z"></path></svg>',
  ICON_FOLD: '<svg class="octicon octicon-fold link-gray" aria-label="Collapse" viewBox="0 0 16 16" version="1.1" width="16" height="16" role="img"><path fill-rule="evenodd" d="M10.896 2H8.75V.75a.75.75 0 00-1.5 0V2H5.104a.25.25 0 00-.177.427l2.896 2.896a.25.25 0 00.354 0l2.896-2.896A.25.25 0 0010.896 2zM8.75 15.25a.75.75 0 01-1.5 0V14H5.104a.25.25 0 01-.177-.427l2.896-2.896a.25.25 0 01.354 0l2.896 2.896a.25.25 0 01-.177.427H8.75v1.25zm-6.5-6.5a.75.75 0 000-1.5h-.5a.75.75 0 000 1.5h.5zM6 8a.75.75 0 01-.75.75h-.5a.75.75 0 010-1.5h.5A.75.75 0 016 8zm2.25.75a.75.75 0 000-1.5h-.5a.75.75 0 000 1.5h.5zM12 8a.75.75 0 01-.75.75h-.5a.75.75 0 010-1.5h.5A.75.75 0 0112 8zm2.25.75a.75.75 0 000-1.5h-.5a.75.75 0 000 1.5h.5z"></path></svg>',
  ICON_UNFOLD: '<svg class="octicon octicon-unfold link-gray" aria-label="Expand" viewBox="0 0 16 16" version="1.1" width="16" height="16" role="img"><path fill-rule="evenodd" d="M8.177.677l2.896 2.896a.25.25 0 01-.177.427H8.75v1.25a.75.75 0 01-1.5 0V4H5.104a.25.25 0 01-.177-.427L7.823.677a.25.25 0 01.354 0zM7.25 10.75a.75.75 0 011.5 0V12h2.146a.25.25 0 01.177.427l-2.896 2.896a.25.25 0 01-.354 0l-2.896-2.896A.25.25 0 015.104 12H7.25v-1.25zm-5-2a.75.75 0 000-1.5h-.5a.75.75 0 000 1.5h.5zM6 8a.75.75 0 01-.75.75h-.5a.75.75 0 010-1.5h.5A.75.75 0 016 8zm2.25.75a.75.75 0 000-1.5h-.5a.75.75 0 000 1.5h.5zM12 8a.75.75 0 01-.75.75h-.5a.75.75 0 010-1.5h.5A.75.75 0 0112 8zm2.25.75a.75.75 0 000-1.5h-.5a.75.75 0 000 1.5h.5z"></path></svg>'
};

const init = () => {
  observeRepoFile();
  main();
};

$(() => {
  init();
  $(document).on('pjax:end', init);
});

// lang percentage
function renderLang(el) {
  const langDom = $(el).children('.BorderGrid-cell').attr('id', 'lang-stats-wrap');
  // title
  langDom.children('h2.h4').remove();
  // lang progress
  langDom.children('div').removeClass('mb-2').appendTo(langDom);
  // lang text
  const langList = langDom.children('ul').addClass('lang-stats-list');
  langList.children('li:last-child').children('span:last-child').removeClass('mr-3');
  langList.find('.text-small').removeClass('text-small');
  langList.find('.octicon.octicon-dot-fill').removeClass('mr-2');
  // lang percent text
  const percentText = langList.children('li').children('.d-inline-flex').children('span:last-child');
  percentText.addClass('text-gray-light').addClass('text-small');
}

// top repo stats
function renderRepoStats(stats) {
  const renderRepoStatsList = () => stats.map((item) => `
    <li class="d-inline">
      <a href="${item.href}" class="d-inline-flex flex-items-center flex-nowrap link-gray no-underline mr-3">
        ${ICON[item.icon]}
        <span class="text-gray-dark text-bold ml-1 mr-1">${item.count}</span>
        <span class="text-gray-light">${item.text}</span>
      </a>
    </li>
  `).join('');
  return $(`
    <div class="BorderGrid-row" >
      <div class="BorderGrid-cell" id="repo-stats-wrap">
        <ul class="list-style-none repo-stats-list">
          ${renderRepoStatsList()}
        </ul>
      </div>
    </div>
  `);
}

// files fold & unfold
function renderFold() {
  const fileDir = $('#files ~ .js-details-container.Details');
  const fold = $(ICON.ICON_FOLD).attr('id', 'files-fold');
  const unfold = $(ICON.ICON_UNFOLD).attr('id', 'files-unfold').css('display', 'none');
  fold.on('click', () => {
    unfold.show();
    fold.hide();
    fileDir.hide();
  });
  unfold.on('click', () => {
    fold.show();
    unfold.hide();
    fileDir.show();
  });
  const li = $('<li>').addClass('link-gray ml-2').css('cursor', 'pointer').append(fold, unfold);
  const ul = $('<ul>').addClass('list-style-none d-flex').append(li);
  const div = $('<div>').addClass('flex-shrink-0 fold-unfold').append(ul);
  return div;
};

function main() {
  // fix security page with
  $('#js-pjax-container > div.container-xl.clearfix.new-discussion-timeline.p-0').addClass('px-4 px-md-5 px-lg-6');

  const repositoryMain = '#repo-content-pjax-container.repository-content > div:last-child > div:last-child';
  const repositoryContent = $(`${repositoryMain} > div:first-child`).removeClass('col-md-9');
  const rightSidebar = $(`${repositoryMain} > div.col-md-3:nth-last-of-type(1)`)
    .removeClass('col-md-3').attr('id', 'repo-stats-info')
    .hide();
  rightSidebar.find('.BorderGrid--spacious').removeClass('BorderGrid--spacious');
  rightSidebar.find('.mt-3').removeClass('mt-3').addClass('mt-2');
  rightSidebar.find('.mb-3').removeClass('mb-3').addClass('mb-2');

  // repo stats
  const repoStats = [];
  const repoStatsType = ['about', 'releases', 'packages', 'sponsor', 'used', 'contributors', 'environments', 'lang'];
  const title = rightSidebar.find('.BorderGrid-cell > h2');
  $.each(title, (i, e) => {
    const text = e.textContent.toLowerCase();
    repoStatsType.forEach((type, index) => {
      if (text.includes(type)) {
        const repoStatsWrap = e.parentElement.parentElement;
        repoStatsType.splice(index, 1);
        if (type === 'lang') return renderLang(repoStatsWrap);
        if (['releases', 'used', 'contributors', 'packages'].includes(type)) {
          const item = $(repoStatsWrap).find('h2 > a').addClass('d-inline-flex flex-items-center flex-nowrap link-gray no-underline mr-3');
          const href = item.attr('href');
          const count = item.find('span.Counter').text() || 0;
          const obj = { text: type, href, count };
          if (type === 'used' || type === 'packages') obj.icon = 'ICON_PACKAGE';
          if (type === 'contributors') obj.icon = 'ICON_USERS';
          if (type === 'releases') obj.icon = 'ICON_TAG';
          repoStats.push(obj);
          $(repoStatsWrap).remove();
          return;
        }
        if (type !== 'about') $(repoStatsWrap).remove();
      }
    });
  });

  // create or update repo stats
  const aboutGridWrap = $('#repo-stats-info > div.BorderGrid').children('div.BorderGrid-row:first-child');
  const repoStatsCellWrap = $('#repo-stats-info').find('#repo-stats-wrap');
  if (repoStatsCellWrap && repoStatsCellWrap.length) {
    $.isFunction(repoStatsCellWrap) && repoStatsCellWrap.replace(renderRepoStats(repoStats));
  } else {
    aboutGridWrap.after(renderRepoStats(repoStats));
  }

  // about
  const aboutWrap = aboutGridWrap.children('div.BorderGrid-cell');
  aboutWrap.children('h2').remove();
  const aboutInfo = aboutWrap.children('p:first-child');
  const aboutLink = aboutInfo.next();
  aboutInfo.append(aboutLink.children('span:last-child'));
  aboutLink.remove();
  const readmeAndLicense = aboutWrap.find('div.mt-2 > a');
  readmeAndLicense.find('svg.mr-2').removeClass('mr-2').addClass('text-gray');
  $.each(readmeAndLicense, (i, el) => {
    const li = $('<li>').addClass('d-inline').append(el);
    $('#repo-stats-wrap > .repo-stats-list').append(li);
  });

  // commits
  const commits = $('#js-repo-pjax-container div.Box-header > div.js-details-container').children('div:last-child:not(.fold-unfold)');
  const commitsLi = commits.find('ul.d-flex > li:first').removeClass().addClass('d-inline');
  commitsLi.find('.d-none').removeClass('d-none');
  commitsLi.children('a').removeClass('pl-3 pr-3 py-3 p-md-0 mt-n3 mb-n3 mr-n3 m-md-0').addClass('mr-3');
  $('#repo-stats-wrap > .repo-stats-list').prepend(commitsLi);

  // move the sidebar to the top
  repositoryContent.parent().before(rightSidebar.show());

  // files fold & unfold
  const fileHeader = $('#js-repo-pjax-container  div.Box-header > div.js-details-container.Details');

  const foldUnfoldWrap = fileHeader.find('.fold-unfold');
  if (foldUnfoldWrap && foldUnfoldWrap.length) {
    foldUnfoldWrap.replace(renderFold());
  } else {
    fileHeader.append(renderFold());
  }
  convertTime();

};

// fix repo stats not show when sub dir return to the root dir
const observerFile = new MutationObserver(main);
function observeRepoFile() {
  const FILE_LIST_WRAPPER = '.repository-content .Box.mb-3';
  const ajaxFiles = document.querySelector(FILE_LIST_WRAPPER);
  if (ajaxFiles) {
    observerFile.observe(ajaxFiles, {
      childList: true
    });
  }
};

function formatTime(date) {
  const padZero = (num) => num < 10 ? `0${num}` : num;
  const y = padZero(date.getFullYear());
  const m = padZero(date.getMonth() + 1);
  const d = padZero(date.getDate());
  const hour = padZero(date.getHours());
  const minute = padZero(date.getMinutes());
  const second = padZero(date.getSeconds());
  return `${y}-${m}-${d} ${hour}:${minute}:${second}`;
}

function convertTime() {
  const time = $('relative-time');
  if (time && time.length) {
    $.each(time, (i, el) => {
      const date = new Date($(el).attr('datetime'));
      $(el).text(formatTime(date));
    });
  }
}
