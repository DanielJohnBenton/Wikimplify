chrome.extension.sendMessage({
	"LANGUAGE": "en",
	"URL": location.href
});

chrome.runtime.onMessage.addListener(
	function(message, sender, sendResponse)
	{
		alert(message.text);
	}
);