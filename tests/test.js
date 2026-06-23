window.addEventListener('DOMContentLoaded', () => {
  const results = document.getElementById('results');
  const iframe = document.getElementById('app');

  function pass(msg){
    const el = document.createElement('div'); el.style.color='green'; el.textContent = 'PASS: ' + msg; results.appendChild(el);
  }
  function fail(msg){
    const el = document.createElement('div'); el.style.color='red'; el.textContent = 'FAIL: ' + msg; results.appendChild(el);
  }

  iframe.addEventListener('load', () => {
    try{
      const doc = iframe.contentWindow.document;
      results.innerHTML = '';

      // Example checks — adapt to your app
      const title = doc.querySelector('title')?.textContent || '';
      if(title) pass('ページタイトルが存在します: ' + title); else fail('ページタイトルがありません');

      const bodyNotEmpty = doc.body && doc.body.textContent.trim().length > 0;
      if(bodyNotEmpty) pass('body にコンテンツがあります'); else fail('body が空です');

      // Check for element with id "app" as an example
      const hasApp = !!doc.getElementById('app');
      if(hasApp) pass('id="app" 要素を検出'); else pass('id="app" 要素は必須ではありません (オプショナル)');

    }catch(e){
      results.innerHTML = '';
      fail('iframe の読み込み中にエラー: ' + e.message);
    }
  });
});
