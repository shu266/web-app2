' use strit ';
const userNmameInput = document.getElementById('user-name')
const assessmentButton = document.getElementById('assessment')
const resultDivision = document.getElementById('result-area')
const tweetDivision = document.getElementById('tweet-area')
const birthdayInput = document.getElementById('birthday')
const assessmentBirthdayButton = document.getElementById('birthday-assessment')
const resultDivision2 = document.getElementById('result-area2')

assessmentButton.addEventListener(
'click',
function () {
  const userName = userNmameInput.value
  if ( userName.length === 0) {
    return;
  }

  resultDivision.innerText = '';

   const bodyDivision = document.createElement('div');
   bodyDivision.setAttribute('class', 'card-body');

   const paragraph = document.createElement('p');
   paragraph.setAttribute('class', 'card-text');
   const result = assessment(userName);
   paragraph.innerText = result;
   bodyDivision.appendChild(paragraph);


   resultDivision.setAttribute('class', 'card');
   resultDivision.appendChild(bodyDivision);


   tweetDivision.innerText = '';
   const anchor = document.createElement('a');
   const hrefValue =
   'https://twitter.com/intent/tweet?button_hashtag=星座占い&ref_src=twsrc%5Etfw';

   anchor.setAttribute('href', hrefValue);
   anchor.setAttribute('class', 'twitter-hashtag-button');
   anchor.setAttribute('date-text', '診断結果の文章');
   anchor.innerText = 'Tweet #占い結果';


   tweetDivision.appendChild(anchor);

   const script = document.createElement('script');
   script.setAttribute('src', 'https://platform.twitter.com/widgets.js');
   tweetDivision.appendChild(script);
 }
);

userNmameInput.addEventListener(
  'keydown',
  (event) => {
    if(event.code === 'Enter') {
      assessmentButton.dispatchEvent(new Event('click'))

    }
  }
)



  assessmentBirthdayButton.addEventListener(
'click',
function () {
  const birthday = birthdayInput.value
  if ( birthday.length === 0) {
    return ;
  }
  resultDivision2.innerText = '';

  const headerDivision2 = document.createElement('div');
   headerDivision2.setAttribute('class', 'card-header text-bg-primary');
   headerDivision2.innerText = ' ';

   const bodyDivision2 = document.createElement('div');
   bodyDivision2.setAttribute('class', 'card-body');

   const paragraph2 = document.createElement('p');
   paragraph2.setAttribute('class', 'card-text');
   const result2 = birthdayAssessment(birthday)
   paragraph2.innerText = result2;
   bodyDivision2.appendChild(paragraph2);


   resultDivision2.setAttribute('class', 'card');
   resultDivision2.appendChild(headerDivision2);
   resultDivision2.appendChild(bodyDivision2);
    }
  )


  birthdayInput.addEventListener(
  'keydown',
  () => {
    if(Event.code === 'Enter') {
      assessmentBirthdayButton.dispatchEvent(new Event('click'));
    }
  }
)



const answers = [
  '###userName###さんの今年は、自己成長と新たな始まりがテーマとなる年です。前半は、あらゆる面で幸運に恵まれるでしょう。新しいことに挑戦する勇気が湧き、自分らしく生きるための道を切り開いていくことになるでしょう。目標達成に向けた努力が報われるし、自己肯定感がグンと高まるはず。7月以降、運勢は落ち着き、日々の生活を丁寧に送ることに満足感を覚えるでしょう。前半で積み上げた自己投資や努力が生活の安定に結びつくのです。家庭や生活の調整を意識するとさらに良いでしょう。',
  '###userName###さんの今年の前半の運勢は、内省的でやや低調。家で過ごす時間が増えるでしょう。焦らず、少し立ち止まり、自分の内面と向き合うようにしてみましょう。読書や日記、趣味に没頭するほど自己理解が深まり、充実の時を得られるはず。後半は、運気が急上昇。人知れず努力を重ねてきたことが大きな花を咲かせるでしょう。また外出や人前での発言、自己表現が運を切り拓く暗示が。服装や部屋の模様替えなど小さな自己投資こそが大チャンスを引き寄せます。',
  '###userName###さんの今年の運勢は前半、やや低調。生活リズムを整え心身を充実させましょう。家具の配置を変えたり収納や掃除をきちんとしたりすれば日常がスムーズに回り、気持ちも軽くなるはず。また、家族との関係が運気を左右します。感情的なもつれには注意を。7月以降、心は外の世界へ向かい、趣味、サークルやワークショップで新しい自分を発見するなど行動するほどにチャンスが増えていくはず。遊び心を大切にすれば運気はさらに上昇。より豊かな人生を手に入れられる時期です',
  '###userName###さんの今年の前半は、運勢パワーは華やかで活発。自己表現や創造性が高まる時期です。趣味や遊び、創作活動など自分の好きなことに情熱を注ぐと運気が大きく上昇するでしょう。積極的にイベントやワークショップに参加を。人生を広げるチャンスをゲットできます。後半は、安定運。華やぎは減るものの、毎日の習慣を整えることが長期的な運の強化につながります。毎日のルーティンを整えたり、心身のケアに意識を向けたりすることで、より安定した日々を送れるでしょう。',
  '###userName###さんの今年の前半の運勢はやや停滞。身近な人との関係に悩まされ、気力が削がれてしまうでしょう。しかし自身の内面を深く掘り下げて考える良い機会。そこから学びを得るようにしたいもの。また人から引き継ぐアドバイスなどで得るものを大切にすると運気向上効果が。後半は運気急上昇。知的好奇心が刺激され、新しい冒険に出たくなるでしょう。旅行や学び、情報収集などに挑戦を。視野を広げることで、あなたの人生に新たな可能性がもたらされるはずです。',
  '###userName###さんの今年の前半の運気は申し分なし。好奇心と探究心が幸運の呼び水になるでしょう。本やネットで情報を集めたり、新しい習い事やオンライン講座に挑戦するのは◎。新しい世界が目の前に開け、意気揚々と日々を送れる半年間です。後半は、運勢が下降線をたどりそう。キャリアや社会的立場に縛られ、日々のタスクや責任に押しつぶされそうになることも。ジタバタせず心にゆとりを持ち、自分のペースを守っていくことが運気低下に歯止めをかけるカギ。',
  '###userName###さんの今年の前半は、安定基調。精神的に落ち着いた日々を送れるでしょう。自分のペースを守り、ゆったりと過ごすと◎。無理せず堅実に生きることがあなたの価値を高め、さらには後半の幸運へとつなげられるはず。後半は、発展モード。SNSや電話などのコミュニケーションで新しいチャンスが生まれそうです。情報の取り扱いや話し方が運を左右する暗示。また知的好奇心が刺激される時期。学びたいこと伝えたいことをアピールすると新しい世界が開けるでしょう。',
  '###userName###さんの今年の前半は、人間関係が大きく広がる時期。仕事でもプライベートでも新しい出会いに恵まれます。協力者やパートナーの後押しも強力で、目標達成に向けて大きな力となるでしょう。ただし、ライバルの存在には十分気をつけて。7月以降の運気は低迷気味。人づきあいに嫌気がさし、殻にこもることもありそうです。しかし心から信頼する人との関係は良好。その人との共同作業で深い絆を紡ぐこともできるでしょう。内面的な成長を心がけると運気は改善傾向に。',
  '###userName###さんの今年の前半の運勢は、発展的。情報収集や学びに幸運が潜んでいます。通勤中の読書やSNSでの情報整理、近所のコミュニティでの会話などを大切に。友人や兄弟姉妹との交流を楽しむのも幸運のカギに。後半は、運気ダウン。とりわけ家庭や生活環境が運気を左右します。感情的になりやすく、小さなトラブルも起きやすいけれど、落ち着いて話し合えば運気は安定化。家庭環境を整えたり大切な人との時間を増やしたりすることで、心の充足感を得られるでしょう。',
  '###userName###さんの今年の前半は、運勢が活性化。友人関係やコミュニティでの活動が活発になります。共通の目標を持つ仲間との出会いがあなたの世界を広げてくれるでしょう。多くの人と交流することで新たな視点やアイデアが生まれ、目標達成に向けての大きな後押しに。7月以降、運気は鎮静化。立ち止まって内面を深く見つめる時期に入ります。これまでの努力を振り返り、今後の計画を立てるとよさそう。また自分自身と向き合うことで本当に大切なものが見えてくるはず。',
  '###userName###さんの今年の前半の運勢は、地味め。日々の生活や仕事、健康に焦点が当たります。家事の習慣化、仕事の効率化、健康管理など「地味だけど大事なこと」を整えると静かに力が積み重なっていくでしょう。とくに毎日のルーティン見直しは◎。後半は運気アップし、人とのつながりに光が差す流れへ。新しい出会いや、周囲との協力が運気を高めてくれるでしょう。とくに社会的な活動の中で素晴らしいパートナーや協力者との出会いが。邪魔する人もいそうな点には注意を。',
  '###userName###さんの今年の前半は、停滞運。常識や周囲の目に縛られ、自由に動けず息苦しさを感じがちです。日々の生活にも華やぎがなく、もどかしい気分が続きそう。しかし年長者との交流に救われる暗示が。上司、先輩などと話してみましょう。後半に入ると運気は活性化。友人や趣味仲間とのつながりがあなたに力を与えるでしょう。多くの人と交流する中で価値観を共有できる仲間と出会い、共に未来を築いていけそう。人生がより豊かになるこの時期を大切に過ごしてください。',
  '###userName###自分を上手に表現でき、それをきっかけに新しい世界が開ける幸運年。使う言葉、仕種、ファッション、何であれ自分らしさを意識してみて。とくに年明けから5月上旬までは今までのモヤモヤが消え去って、非常にポジティブに自己表現できるはず。このチャンスに懸案の事柄を実現させるべく行動を起こすと吉。ただし、5月中旬から10月末までは運気がやや下火なので、守りの体勢で。2022年の早い段階で攻めるのが、より大きな幸運をつかむコツ。',
];

function assessment(userName) {
  let sumOfCharCode = 0;
  for (let i = 0; i < userName.length; i++) {
    sumOfCharCode = sumOfCharCode + userName.charCodeAt(i);
  }

  const index = sumOfCharCode % answers.length;
  let result = answers[index];

  result = result.replaceAll('###userName###', userName);
  return result;
}





function birthdayAssessment (birthday) {
  if ( birthday >= 1222 ) {
    result2 = "やぎ座"
  } else if ( birthday >= 1123 ) {
    result2 = "いて座"
  } else if ( birthday >= 1024 ) {
    result2 = "さそり座"
  }else if ( birthday >= 923 ) {
    result2 = "てんびん座"
  } else if ( birthday >= 823 ) {
    result2 = "おとめ座"
  } else if ( birthday >= 723 ) {
    result2 = "しし座"
  } else if ( birthday >= 622 ) {
    result2 = "かに座"
  } else if ( birthday >= 521 ) {
    result2 = "ふたご座"
  } else if ( birthday >= 420 ) {
    result2 = "おうし座"
  } else if ( birthday >= 321 ) {
    result2 = "おひつじ座"
  } else if ( birthday >= 219 ) {
    result2 = "うお座"
  } else if ( birthday >= 120 ) {
    result2 = "みずがめ座"
  } else if ( birthday <= 119 ) {
    result2 = "やぎ座"
  } return result2;
}
