chrome.extension.sendMessage({
	"LANGUAGE": "en",
	"URL": location.href
});

// https://stackoverflow.com/a/4793630
function insertAfter(newNode, referenceNode)
{
	referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}

chrome.runtime.onMessage.addListener(
	function(message, sender, sendResponse)
	{
		if(message.text == "SIMPLE_EXISTS")
		{
			var h1 = document.getElementsByTagName("h1")[0];
			var link = document.createElement("a");
			var linkText = document.createTextNode("Simple available -->");
			link.setAttribute("href", message.url);
			link.appendChild(linkText);
			
			insertAfter(link, h1);
			//insertAfter(link, document.createElement("hr"));
		}
	}
);