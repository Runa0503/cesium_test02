// Cesium ionのアクセストークン
Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI2MGRjMjZmOS1hZGExLTRmM2ItOTAwOS03YmIwY2JkN2M3YWEiLCJpZCI6MjIzMDQzLCJpYXQiOjE3MTg3NDQ3NDN9.gK9QtNS5q_7sCTiAt_bQf4d-w31GtZFsu3nZpKrRdgs';

// Cesium ViewerをcesiumContainerというIDのHTML要素に初期化
const viewer = new Cesium.Viewer('cesiumContainer', {
    terrainProvider: Cesium.createWorldTerrain(),
});

// OpenStreetMapの建物を追加
viewer.scene.primitives.add(Cesium.createOsmBuildings());

// 初期表示時のカメラ位置
viewer.camera.flyTo({
    destination: Cesium.Cartesian3.fromDegrees(139.765, 35.66, 1000.0),
    orientation: {
        heading: Cesium.Math.toRadians(0),
        pitch: Cesium.Math.toRadians(-20),
    },
});