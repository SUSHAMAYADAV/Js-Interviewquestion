/*
function getData(id, getNextData) {
  setTimeout(() => {
    console.log("iddd-->", id);
    if (getNextData) {
      getNextData();
    }
  }, 1000);
}
getData(1, () => {
  getData(2, () => {
    getData(3);
  });
});*/

/*const getPromise = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("upper of resolve");
      resolve("success");
    }, 2000);
  });
};

const p2 = () => {
  return new Promise((resolve, reject) => {
    console.log("upper of resolve");
    resolve("success");
  });
};
getPromise().then((res) => {
  console.log("promise fullfilled", res);

  p2().then((response) => {
    console.log("response-->", response);
  });
});
promise.catch((err) => {
  console.log("rejected", err);
});*/

//using promise
/*function getData(id) {
    return new Promise((resolve,reject)=>{
       setTimeout(() => {
      console.log("iddd-->", id)
      resolve('success')
    }, 1000);
    })
  }
  getData(1).then(()=>{
    return getData(2)
  }).then((res)=>{
    return getData(3)
  }).then((res)=>{
    console.log('result-->',res)
  })*/

  //using async await
  /*function getData(id) {
    return new Promise((resolve,reject)=>{
       setTimeout(() => {
      console.log("iddd-->", id)
      resolve('success')
    }, 1000);
    })
  }
  async function getfunc(){
  await getData(1)
  await getData(2)
  await getData(3)
  await getData(4)
  }
  getfunc()*/