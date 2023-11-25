import React, { useState, useEffect } from "react";
import './style.scss'

const Api = () => {
  const [data, setData] = useState([]);

  const getData = () => {
    const token =
      "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiY2FlOTU2NmEyMWIyOTMxMzUwMzQ1NDhiZGIzYjI2MjkxMzM2OTliNzMzMGM2MTZlNzgxMWMzZjM0NTA1YjgzYTU1NGMzMzVmMzA5M2EyZWQiLCJpYXQiOjE2OTk3OTQzMDAuNzI3NjI3LCJuYmYiOjE2OTk3OTQzMDAuNzI3NjM1LCJleHAiOjE2OTk4MTIzMDAuNzEzNzg0LCJzdWIiOiIyNzMiLCJzY29wZXMiOltdfQ.TQ37nT0wPmpqLaARlcFjLFNW6ETaWkqwIafrv73Hiiqno8EcwER4SreVQ_aMlnNtwuTlxSSWhQTr9dbz-dS8WcG_fRKTUfiytd0Lg-tzznM2IFbwLAgv1QH5T_-Eyywiph-t0KddQ3t3O4W2_7FdlzLerMfXIqC2vG-8HqqGMNZcUAn3J6HPdxv2x8nVlyTmRGFVuZsHWbLn0k82o_E5L_CwhX7evp-L0J2G2V9dgVGCdyp8MXgJG_pDL-PjUpgNSg8OjXqtzAbj1n3VItX1jX_OncLdpucSR5dlOXJECbFWiJusMhcXlRlwuaSBfHt7tka8p0e6Txa2xVGy7f1GrKImu99J-fysr1u23Av5irnINq5gvKpQEzdr0Hov8-XHH2TAPRU2-wDx4T4qN1WwHq2Uc_7GSRKeVr81xSXp70dce6MUepbfE5JXFCwa9EbyIbviPEaS_g1kdtWlm094k_W0v4_gxW2qr49SgpeYo9ZEkvIQ1WXx5EsebyBFX11_oNKxdGmpmELT-aQh8s1G4VwtzY7mcC1EqLGbw82Za1eyf87GhII9AqcukOkz_SUSkjXAOpT841ytiTOdtWJP1VSIZ_nRvDNMRSOlcsAiOAEqtHB2gkfVfxV3VHNbkS6Z9YhdzH7towG-TNSqdve5SPClAdFokEpEK-p2fkxd7kc";

    const setHead = new Headers();
    setHead.append("Authorization", `Bearer ${token}`);

    const setMethod = {
      method: "GET",
      headers: setHead,
    };

    const url =
      "https://pluralcodesandbox.com/yorubalearning/api/admin/category_list";

    fetch(url, setMethod)
      .then((response) => response.json())
      .then((result) => {
        setData(result);
        console.log(result);
      })
      .catch((error) => console.log("error", error));
  };

  // Fetch data from API
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="d-flex justify-content-between">
      {data?.map((item, index) => (
        // <p key={index}>{item.name}</p>
        <div key = {index}>
            <h2>{item.name}</h2>
          <img src= {item.image} alt="" className="w-100 h-auto"/>
        </div>
      ))}
    </div>
  );
};

export default Api;
