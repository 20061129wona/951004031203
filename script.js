// 새로운 시작! 밥과 노래만 추천하는 코드
// 새로운 시작! 밥과 노래만 추천하는 코드
const menus = [
    { name: '김치찌개', emoji: '🐻🥘' }, { name: '된장찌개', emoji: '��🥘' }, { name: '삼겹살', emoji: '🐷🥩' },
    { name: '치킨', emoji: '🐥🍗' }, { name: '피자', emoji: '🍕🦄' }, { name: '비빔밥', emoji: '🍲🌸' },
    { name: '불고기', emoji: '🐮🥩' }, { name: '제육볶음', emoji: '🐷🍖' }, { name: '돈까스', emoji: '🐷🍖' },
    { name: '라면', emoji: '🍜🐰' }, { name: '파스타', emoji: '🍝🐱' }, { name: '초밥', emoji: '🍣🐟' },
    { name: '떡볶이', emoji: '🍢🐻' }, { name: '쌀국수', emoji: '🍜🦊' }, { name: '샐러드', emoji: '🥗🐰' },
    { name: '햄버거', emoji: '🍔🐱' }, { name: '갈비탕', emoji: '🍲🐮' }, { name: '순두부찌개', emoji: '🥘🐰' },
    { name: '오므라이스', emoji: '🍳🐥' }, { name: '냉면', emoji: '🥢🐧' }
];

const lucySongs = [
    'LUCY - 떼굴떼굴 🐻', 'LUCY - 조깅 🐥', 'LUCY - 개화 🌸', 'LUCY - Flare 🔥', 'LUCY - Flowering 🌼', 'LUCY - Snooze 😴', 'LUCY - Watermelon 🍉', 'LUCY - Hero 🦸', 'LUCY - I Got U 💌', 'LUCY - Knowhow 🧠', 'LUCY - Highway 🛣️', 'LUCY - BUD 🌱', 'LUCY - Replay 🔁', 'LUCY - Light 💡', 'LUCY - Blue 💙', 'LUCY - Irrelevant Answer ❓', 'LUCY - Find You 🔍', 'LUCY - Candy 🍬', 'LUCY - Haze 🌫️', 'LUCY - Astronaut 👨‍🚀',
    'LUCY - MP3 🎵', 'LUCY - 엔진을 켜둘게 🚗',
    'LUCY - 아니야 🙅', 'LUCY - 열 🔥', 'LUCY - 우린 👭', 'LUCY - 떼굴떼굴 (Roller Coaster) 🎢', 'LUCY - Flare (불꽃) 🔥', 'LUCY - 새벽 🌅', 'LUCY - 개화 (Flowering) 🌸', 'LUCY - 조깅 (Jogging) 🏃', 'LUCY - 깜깜 🌑', 'LUCY - 바다 🌊', 'LUCY - 꿈 💤', 'LUCY - 미리 메리 크리스마스 🎄', 'LUCY - 안녕 👋', 'LUCY - 동화 📖', 'LUCY - 맞지? 🤔', 'LUCY - 별 ⭐', 'LUCY - 떼굴떼굴 (Acoustic) 🎸', 'LUCY - 개화 (Acoustic) 🎸', 'LUCY - 조깅 (Acoustic) 🎸'
];

function getRandomMenu() {
    const m = menus[Math.floor(Math.random() * menus.length)];
    return `${m.emoji} ${m.name}`;
}

function getRandomSong() {
    return lucySongs[Math.floor(Math.random() * lucySongs.length)];
}

document.getElementById('recommendBtn').onclick = function() {
    const menu = getRandomMenu();
    const song = getRandomSong();
    const name1 = document.getElementById('name1') ? document.getElementById('name1').value.trim() : '';
    const name2 = document.getElementById('name2') ? document.getElementById('name2').value.trim() : '';
    let matchResult = '';
    let ladderHtml = '';
    let ladderScore = 0;
    if(name1 && name2) {
        const arr1 = name1.split('');
        const arr2 = name2.split('');
        // 랜덤 매칭
        const shuffled2 = arr2.slice().sort(() => Math.random() - 0.5);
        ladderHtml = '<b>이름 사다리타기 결과</b><br>';
        for(let i=0; i<arr1.length; i++) {
            const to = shuffled2[i % shuffled2.length];
            ladderHtml += `<div style='display:inline-block;margin:2px 8px 2px 0;padding:2px 8px;border-radius:8px;background:#fce4ec;color:#6a1b9a;font-weight:bold;'>${arr1[i]} → ${to}</div>`;
            ladderScore += to.charCodeAt(0);
        }
        matchResult = `<br>이름 궁합: <b>${name1} & ${name2} = ${ladderScore}점</b>`;
    }
    document.getElementById('result').innerHTML =
        `오늘의 추천 메뉴는 <b>${menu}</b> 입니다!<br>오늘의 루시 노래 추천: <b>${song}</b>${matchResult}`;
    document.getElementById('ladderResult').innerHTML = ladderHtml;
};
