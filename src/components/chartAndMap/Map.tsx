import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useQuery } from "react-query";
import { getMapData } from "../../utils/api/chartAndMap";
import { CiLocationOn } from "react-icons/ci";
import { renderToStaticMarkup } from "react-dom/server";
import L from "leaflet";
const Map = () => {
  const { data: mapData } = useQuery({
    queryKey: ["mapData"],
    queryFn: getMapData,
    cacheTime: 5000,
    // refetchInterval: 5000,
  });
  const iconMarkup = renderToStaticMarkup(<CiLocationOn size={10} color="red" />);
  const customIcon = new L.DivIcon({
    html: iconMarkup,
    iconSize: [10, 10],
    iconAnchor: [20, 40],
    popupAnchor: [0, -40],
  });
  return (
    <MapContainer center={[0, 0]} zoom={3} scrollWheelZoom={false} className="">
      <TileLayer attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors' url="https://{s}.tile.osm.org/{z}/{x}/{y}.png" />
      {mapData &&
        mapData?.map((val) => {
          return (
            <Marker icon={customIcon} key={val.population} position={{ lng: val.countryInfo.long, lat: val.countryInfo.lat }}>
              <Popup>
                <p className="text-[10px]">Country {val.country}</p>
                <p className="text-[8px]">Active {val.active}</p>
                <p className="text-[8px]">recovered {val.recovered}</p>
                <p className="text-[8px]">deaths {val.deaths}</p>
              </Popup>
            </Marker>
          );
        })}
    </MapContainer>
  );
};

export default Map;
