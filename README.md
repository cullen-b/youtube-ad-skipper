## youtube-ad-skipper
Speeds up YouTube ads 16x, effectively skipping the ad!

# How to install on Chrome
- This extension works with any browser built on Chromium
- Clone (or download) the repo to your machine
- Go to Chrome's extension manager (I use Arc so that link looks like this: arc://extensions/)
- Turn on developer mode (Top right)
- Click "Load Unpacked" (Top left)
- Select the repo folder
- Reload the extension and any YouTube pages
- The beginning of this (https://www.youtube.com/watch?v=0n809nd4Zu4) video explains how to install extensions

# How to use
- When watching a video on YouTube press **shift** to toggle the speed boost
- Do this at the beginning of an ad to effectively skip the ad
- Do this inside a YouTube video to skip forward

# Notes
- The max playback speed of YT videos is 16x or I would've made it faster
- If you want to change the shortcut from shift to (something else) lookup "event keycode .js" and change this [...if (event.keyCode === 16) {...] part of "content.js"
  
# In the future
- I want to find out how to automatically detect YouTube ads and not have to worry about toggling the playback speed but YT makes it hard
- I want to automatically press the skip button (if there is one on the ad)

Thanks for using my extension, it was a quick project that has saved me countless hours!

If you have questions about the extension, feel free to email me:
**clnbkrpvd@gmail.com**
