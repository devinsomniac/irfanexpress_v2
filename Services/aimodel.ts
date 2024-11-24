import {GoogleGenerativeAI,HarmCategory,HarmBlockThreshold,}  from "@google/generative-ai";
  
  const apiKey = process.env.GEMINI_API_KEY || '';
  const genAI = new GoogleGenerativeAI(apiKey);
  
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 40,
    maxOutputTokens: 8192,
    responseMimeType: "text/plain",
  };
  
 
    export const chatSession = model.startChat({
      generationConfig,
      history: [
        {
          role: "user",
          parts: [
            {text: "Generate Travel Plan for Location: Cumilla,Bangladesh for 3 Days for Couple with a Cheap budget, Give me a  itinerary with placeName, Place Details, ticket Pricing(if not available type - \"Check Official website\"), Time  travel each of the location for 3 days with each day plan with best time to visit in and also speciallity of the location the user has requested like cumilla in this case like transportation, food, clothes, etc JSON format."},
          ],
        },
        {
          role: "model",
          parts: [
            {text: "```json\n{\n  \"tripName\": \"Budget-Friendly Cumilla Getaway for Couples (3 Days)\",\n  \"location\": \"Cumilla, Bangladesh\",\n  \"duration\": \"3 Days\",\n  \"budget\": \"Cheap\",\n  \"travelers\": \"Couple\",\n  \"itinerary\": [\n    {\n      \"day\": 1,\n      \"theme\": \"Exploring Cumilla City & History\",\n      \"plan\": [\n        {\n          \"time\": \"9:00 AM - 12:00 PM\",\n          \"placeName\": \"Cumilla City\",\n          \"placeDetails\": \"Explore the main city area, visit the local markets (like the Kandirpar Market) for experiencing the local life and finding souvenirs. You can also visit the Town Hall and the old colonial-era buildings.\",\n          \"ticketPricing\": \"N/A\",\n          \"transportation\": \"Walking or Rickshaw (Negotiate fare beforehand)\",\n          \"bestTimeToVisit\": \"Morning to avoid afternoon heat\",\n          \"speciality\": \"Local market experience, historical architecture\"\n        },\n        {\n          \"time\": \"12:00 PM - 1:00 PM\",\n          \"placeName\": \"Local Restaurant\",\n          \"placeDetails\": \"Enjoy a delicious and affordable lunch at a local restaurant. Try traditional Bengali dishes.\",\n          \"ticketPricing\": \"Approx. 200-400 BDT per person\",\n          \"transportation\": \"Walking\",\n          \"bestTimeToVisit\": \"Lunchtime\",\n          \"speciality\": \"Authentic Bengali cuisine\"\n        },\n        {\n          \"time\": \"1:00 PM - 4:00 PM\",\n          \"placeName\": \"Mainamati Museum\",\n          \"placeDetails\": \"Explore the Mainamati Museum, showcasing the rich history and archaeological finds from the Mainamati-Lalmai region.\",\n          \"ticketPricing\": \"Check Official Website\",\n          \"transportation\": \"Rickshaw or CNG (Negotiate fare)\",\n          \"bestTimeToVisit\": \"Afternoon\",\n          \"speciality\": \"Ancient history and archaeology\"\n        },\n        {\n          \"time\": \"4:00 PM - 6:00 PM\",\n          \"placeName\": \"Lalmai-Mainamati\",\n          \"placeDetails\": \"Visit one or two of the ancient Buddhist sites at Lalmai-Mainamati (e.g., Shalban Vihara).  Choose based on your time and interest. Some sites might have small entry fees.\",\n          \"ticketPricing\": \"Check Official Website/on-site\",\n          \"transportation\": \"Rickshaw or CNG (Negotiate fare)\",\n          \"bestTimeToVisit\": \"Late afternoon to avoid intense heat\",\n          \"speciality\": \"Ancient Buddhist monasteries and stupas\"\n        }\n\n      ]\n    },\n    {\n      \"day\": 2,\n      \"theme\": \"Nature and Peace\",\n      \"plan\": [\n        {\n          \"time\": \"9:00 AM - 1:00 PM\",\n          \"placeName\": \"Lawachara National Park\",\n          \"placeDetails\": \"Spend the morning exploring Lawachara National Park.  This requires some planning and potentially a local guide (consider negotiating with a local guide beforehand for a better price).\",\n          \"ticketPricing\": \"Check Official Website\",\n          \"transportation\": \"Local bus/ CNG then potentially a hired motorbike/cycle to reach deeper areas\",\n          \"bestTimeToVisit\": \"Morning for better visibility\",\n          \"speciality\": \"Biodiversity, lush greenery, trekking\"\n        },\n        {\n          \"time\": \"1:00 PM - 2:00 PM\",\n          \"placeName\": \"Picnic Lunch\",\n          \"placeDetails\": \"Have a packed lunch amidst nature in Lawachara or find a local eatery near the park exit.\",\n          \"ticketPricing\": \"Budget-friendly packed lunch\",\n          \"transportation\": \"N/A\",\n          \"bestTimeToVisit\": \"Lunchtime\",\n          \"speciality\": \"Relaxing picnic\"\n        },\n        {\n          \"time\": \"2:00 PM - 6:00 PM\",\n          \"placeName\": \"Relaxation and local exploration\",\n          \"placeDetails\": \"Relax, enjoy the local atmosphere near your accommodation or explore the nearby areas around Cumilla.\",\n          \"ticketPricing\": \"N/A\",\n          \"transportation\": \"Walking or local transport\",\n          \"bestTimeToVisit\": \"Afternoon\",\n          \"speciality\": \"Relaxation, local discovery\"\n\n        }\n      ]\n    },\n    {\n      \"day\": 3,\n      \"theme\": \"Departure\",\n      \"plan\": [\n        {\n          \"time\": \"9:00 AM - 10:00 AM\",\n          \"placeName\": \"Local breakfast\",\n          \"placeDetails\": \"Enjoy a local breakfast\",\n          \"ticketPricing\": \"Approx 50-150 BDT per person\",\n          \"transportation\": \"Walking\",\n          \"bestTimeToVisit\": \"Morning\",\n          \"speciality\": \"Local flavours\"\n        },\n        {\n          \"time\": \"10:00 AM - onwards\",\n          \"placeName\": \"Departure from Cumilla\",\n          \"placeDetails\": \"Depart from Cumilla.\",\n          \"ticketPricing\": \"Depends on your transport mode\",\n          \"transportation\": \"Bus/Train/Private Car\",\n          \"bestTimeToVisit\": \"Morning or according to your schedule\",\n          \"speciality\": \"Departure\"\n        }\n      ]\n    }\n  ],\n  \"tips\": [\n    \"Negotiate prices for rickshaw and CNG rides.\",\n    \"Carry some local currency (BDT).\",\n    \"Dress modestly, especially when visiting religious sites.\",\n    \"Stay hydrated, especially during the hotter months.\",\n    \"Learn a few basic Bengali phrases.\",\n    \"Check weather conditions before you go.\"\n  ],\n  \"food\": \"Expect to find plenty of affordable and delicious Bengali food. Try local dishes like  Biryani,  Kacchi Biryani,  Fuchka, and various sweets.\",\n  \"clothes\": \"Pack light, comfortable clothing suitable for warm weather. Modest clothing is recommended when visiting religious sites.\",\n  \"transportation\": \"Rickshaws, CNGs, and local buses are common and affordable modes of transportation within Cumilla. For longer distances, consider buses or trains.\"\n}\n```\n"},
          ],
        },
      ],
    });

