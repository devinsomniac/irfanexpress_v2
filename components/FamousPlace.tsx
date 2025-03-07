import FamousCard from "./FamousCard"
import SearchForm from "./SearchForm"

type FamousPlaceType = {
  id: number,
  name: string,
  Days: number,
  group: number,
  type: string,
  image: string,
  tag: string
}

const famousPlace: FamousPlaceType[] = [
  {
    id: 1,
    name: "Singapore",
    Days: 5,
    group: 2,
    type: "Honeymoon",
    image: '/Famous_Singapore.jpg',
    tag: "Romantic Singapore Getaway"
  },
  {
    id: 2,
    name: "Nepal",
    Days: 3,
    group: 4,
    type: "Trek",
    image: '/Famous_Nepal.jpg',
    tag: "Nepal's Trekking Adventure"
  },
  {
    id: 3,
    name: "Dubai",
    Days: 7,
    group: 4,
    type: "Relax",
    image: '/Famous_Dubai.jpg',
    tag: "Dubai Chill with Friends"
  },
  {
    id: 4,
    name: "Malaysia",
    Days: 5,
    group: 2,
    type: "Cultural Exploration",
    image: '/Famous_Malaysia.jpg',
    tag: "Malaysia's Culture & Wild Escape"
  },
]

const FamousPlace = () => {
  return (
    <div
      className='p-10'
      style={{
        backgroundImage: `url('/bg.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="py-2">
        <h2 className="text-center font-medium text-3xl pb-4 ">Generate Itinerary for your next Trip</h2>
        <SearchForm />
      </div>
      <div className="py-6 mt-6">
        <h2 className='text-center text-4xl font-bold'>Popular Destinations You can Travel !!</h2>
        <div className="flex justify-center items-center">
          <div className=' grid grid-cols-1 md:grid-cols-4 gap-4'>
            {famousPlace.map((place) => (
              <div key={place.id}>
                <FamousCard place={place} />
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  )
}

export default FamousPlace