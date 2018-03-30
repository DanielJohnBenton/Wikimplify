chrome.runtime.onMessage.addListener(
	function(message, sender, sendResponse) {
		if(message["LANGUAGE"] == "en")
		{
			var urlParts = message["URL"].split("/");
			var lastPart = urlParts.pop();
			var firstPart = urlParts.join("/");
			var simpleUrl = firstPart.split("//en.wikipedia").join("//simple.wikipedia") +"/"+ lastPart;
			
			var request = new XMLHttpRequest();
			request.open("GET", simpleUrl, false);
			request.send();
			var result = request.responseText;
			
			var doesNotHave = "Wikipedia does not yet have an article with this name";
			
			if(result.indexOf(doesNotHave) === -1)
			{
				// There is a simple page
				chrome.tabs.sendMessage(sender.tab.id, {"text": "SIMPLE_EXISTS"});
			}
		}
		
		return true;
	}
);