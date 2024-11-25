import 'dotenv/config'
import {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} from "@google/generative-ai";

console.log("Gemini api is : ", process.env.GEMINI_API_KEY)
const apiKey = 'AIzaSyD0jZ0RipkKQqdBST7Nl24LU3CXCNcp5Zg';
console.log(apiKey)
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 8192,
  responseMimeType: "application/json",
};


  export const chatSession = model.startChat({
    generationConfig,
    history: [
      {
        role: "user",
        parts: [
          {text: "Generate Travel Plan for Location: Cumilla,Bangladesh for 3 Days for Couple with a Cheap budget, Give me a  itinerary with placeName, Place Details, ticket Pricing(if not available type - \\\"Check Official website\\\"), Time  travel each of the location for 3 days with each day plan with best time to visit in and also speciallity of the location the user has requested like cumilla in this case like transportation, food, clothes, etc JSON format.\n"},
        ],
      },
      {
        role: "model",
        parts: [
          {text: "```json\n{\n  \"tripName\": \"3-Day Budget-Friendly Cumilla Trip for Couples\",\n  \"location\": \"Cumilla, Bangladesh\",\n  \"budget\": \"Cheap\",\n  \"travelers\": \"Couple\",\n  \"duration\": \"3 Days\",\n  \"notes\": \"Prices are estimates and may vary.  Always check official websites for the most up-to-date information. Transportation costs depend heavily on the mode of transport chosen (e.g., CNG, rickshaw, bus). Food costs can be significantly lowered by eating at local eateries.\",\n  \"days\": [\n    {\n      \"day\": 1,\n      \"theme\": \"Exploring Cumilla City & its Heritage\",\n      \"plan\": [\n        {\n          \"time\": \"Morning (8:00 AM - 12:00 PM)\",\n          \"placeName\": \"Cumilla Main City & Kandirpar\",\n          \"placeDetails\": \"Explore the bustling city center, visit the local markets (Kandirpar Market), observe the daily life, and soak in the atmosphere.  You can find delicious street food here.\",\n          \"ticketPricing\": \"N/A\",\n          \"transportation\": \"Walking, Rickshaw (approx. 50-100 BDT per ride)\",\n          \"speciality\": \"Local market experience, street food, city vibes\"\n        },\n        {\n          \"time\": \"Afternoon (12:00 PM - 4:00 PM)\",\n          \"placeName\": \"Lalmai Hills\",\n          \"placeDetails\": \"Visit the ancient rock-cut inscriptions and enjoy panoramic views of the city.  Bring water and snacks.\",\n          \"ticketPricing\": \"Check Official website\",\n          \"transportation\": \"CNG or local bus from the city center (approx. 50-100 BDT per person)\",\n          \"speciality\": \"Historical significance, scenic views\"\n        },\n        {\n          \"time\": \"Evening (4:00 PM - 8:00 PM)\",\n          \"placeName\": \"Mainamati War Cemetery\",\n          \"placeDetails\": \"Pay your respects at the war cemetery, a poignant reminder of a significant historical event. Peaceful setting for reflection.\",\n          \"ticketPricing\": \"N/A\",\n          \"transportation\": \"CNG or rickshaw (approx. 50-100 BDT per person)\",\n          \"speciality\": \"Historical site, quiet atmosphere\"\n        }\n      ],\n      \"food\": \"Local restaurants and street food (expect to spend around 500-1000 BDT for a couple)\",\n      \"clothing\": \"Comfortable clothing suitable for walking and warm layers for cooler evenings\"\n    },\n    {\n      \"day\": 2,\n      \"theme\": \"Mainamati & Historical Sites\",\n      \"plan\": [\n        {\n          \"time\": \"Morning (8:00 AM - 12:00 PM)\",\n          \"placeName\": \"Mainamati Museum\",\n          \"placeDetails\": \"Explore the artifacts and learn about the history of the Mainamati region.\",\n          \"ticketPricing\": \"Check Official website\",\n          \"transportation\": \"Local bus or CNG from Cumilla city (approx. 150-250 BDT per person)\",\n          \"speciality\": \"Historical artifacts, learning about the region’s past\"\n        },\n        {\n          \"time\": \"Afternoon (12:00 PM - 4:00 PM)\",\n          \"placeName\": \"Salban Vihara\",\n          \"placeDetails\": \"Discover the ruins of this ancient Buddhist monastery.\",\n          \"ticketPricing\": \"N/A\",\n          \"transportation\": \"Walking or Rickshaw between sites within Mainamati (approx. 50-100 BDT per ride)\",\n          \"speciality\": \"Ancient Buddhist ruins, peaceful exploration\"\n        },\n        {\n          \"time\": \"Evening (4:00 PM - 8:00 PM)\",\n          \"placeName\": \"Kotila Mura\",\n          \"placeDetails\": \"Visit another significant archaeological site in the Mainamati area. Explore the remains of a palace complex.\",\n          \"ticketPricing\": \"N/A\",\n          \"transportation\": \"Walking or Rickshaw (approx. 50-100 BDT per ride)\",\n          \"speciality\": \"Ancient ruins, historical exploration\"\n        }\n      ],\n      \"food\": \"Local restaurants near Mainamati (expect to spend around 500-1000 BDT for a couple)\",\n      \"clothing\": \"Comfortable clothing suitable for walking\"\n    },\n    {\n      \"day\": 3,\n      \"theme\": \"Relaxation and Departure\",\n      \"plan\": [\n        {\n          \"time\": \"Morning (8:00 AM - 12:00 PM)\",\n          \"placeName\": \"Local Market Shopping\",\n          \"placeDetails\": \"Explore local markets for souvenirs and handicrafts.\",\n          \"ticketPricing\": \"N/A\",\n          \"transportation\": \"Walking and Rickshaw\",\n          \"speciality\": \"Souvenir shopping, experiencing local markets\"\n        },\n        {\n          \"time\": \"Afternoon (12:00 PM - 4:00 PM)\",\n          \"placeName\": \"Relaxation/Lunch\",\n          \"placeDetails\": \"Enjoy a leisurely lunch and relax before heading to the bus/train station.\",\n          \"ticketPricing\": \"N/A\",\n          \"transportation\": \"N/A\",\n          \"speciality\": \"Relaxation\"\n        }\n      ],\n      \"food\": \"Local restaurants or street food (expect to spend around 300-500 BDT for a couple)\",\n      \"clothing\": \"Casual clothing\"\n    }\n  ]\n}\n```\n"},
        ],
      },
    ],
  });


