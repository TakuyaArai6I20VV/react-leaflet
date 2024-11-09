import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import iconUrl from "leaflet/dist/images/marker-icon.png";
import iconRetinaUrl from "leaflet/dist/images/marker-icon-2x.png";
import shadowUrl from "leaflet/dist/images/marker-shadow.png";
import redIconUrl from "../images/red-marker.png";
import currentIconUrl from "../images/current-location-marker.png";

L.Marker.prototype.options.icon = L.icon({
  iconRetinaUrl, // 高解像度ディスプレイ用のアイコン画像 
  iconUrl,       // 通常解像度ディスプレイ用のアイコン画像
  shadowUrl,     // マーカーの影の画像
  iconSize: [25, 41],     // アイコンのサイズ
  iconAnchor: [12, 41],   // アイコンのアンカー位置
  popupAnchor: [1, -34],  // ポップアップのアンカー位置
  shadowSize: [41, 41],   // 影のサイズ
});

const redIcon = L.icon({
  iconUrl: redIconUrl,
  iconSize: [66, 51],
  iconAnchor: [1, 31],
  popupAnchor: [33, -19],
  shadowSize: [41, 41],
});

const currentLocationIcon = L.icon({
  iconUrl: currentIconUrl,
  iconSize: [34, 31],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41], 
});

const Map = () => {
  const position = [35.711777, 139.796437];
  const trashPositions = [[35.711777, 139.796438], [35.711888, 139.796549]];
  const redTrashPosition = [35.711988, 139.796549];
  const currentUserPosition = [35.71107503267989, 139.79635197224746];

  return (
    <MapContainer
      center={position}
      zoom={20}
      scrollWheelZoom={false}
      style={{ height: "60vh", width: "70%", margin: "10% auto" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {trashPositions.length > 0 &&
        trashPositions.map((trashPosition, index) => (
          <Marker position={trashPosition}>
            <Popup>
              ゴミ箱{index+1}
            </Popup>
          </Marker>
        ))
      }

      <Marker position={redTrashPosition} icon={redIcon} >
        <Popup>
          ゴミ箱
        </Popup>
      </Marker>

      <Marker position={currentUserPosition} icon={currentLocationIcon} >
        <Popup>
          ゴミ箱
        </Popup>
      </Marker>

    </MapContainer>
  );
};

export default Map;