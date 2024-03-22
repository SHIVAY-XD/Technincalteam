       const manifestUri = "https://bpprod5catchup.akamaized.net/bpk-tv/irdeto_com_Channel_252/output/dash/manifest.mpd";
        async function init() {
            const video = document.getElementById('video');
            const ui = video['ui'];
            const controls = ui.getControls();
            const player = controls.getPlayer();
            window.player = player;
            window.ui = ui;
            player.configure({
                drm: {
                    "clearKeys": {
                    /*Key ID*/
    '80f8cbcf7acf5615ba77b632f794b98d': 
                      /*Key*/
      '2244c6359fdb0623402a5f5c4fa48b3d'
                    }
                }
            });
            player.addEventListener('error', onPlayerErrorEvent);
            controls.addEventListener('error', onUIErrorEvent);
            try {
               await player.load(manifestUri);
                console.log('The video has now been loaded!');
            } catch (error) {
                onPlayerError(error);
        }}

        function onPlayerErrorEvent(errorEvent) {
            onPlayerError(event.detail);
        }

        function onPlayerError(error) {
            console.error('Error code', error.code, 'object', error);
        }

        function onUIErrorEvent(errorEvent) {
            onPlayerError(event.detail);
        }

        function initFailed(errorEvent) {
            console.error('Unable to load the UI library!');
        }
        document.addEventListener('shaka-ui-loaded', init);
        document.addEventListener('shaka-ui-load-failed', initFailed);

   
var a = confirm("JOIN OUR TELEGRAM CHANNEL FOR BETTER LIVE LINKS");

if(a==true){
  window.location.href = "https://t.me/itsteachteam";
}

      
      


      function welcome(){
 window.open("https://t.me/itsteachteam")
        }
