
export const ImageBase="https://image.tmdb.org/t/p/w500";
export const fallbackImg="https://wipfilms.net/wp-content/uploads/2016/07/No_Poster-1.JPEG";

export const fetchData = async(data) => {
  const baseURL = `https://api.themoviedb.org/3/${data}`;
  const tokenAccess =
    'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhY2ZmM2JlZmU4ZDY2MzFjMzVmNTdkMzkxNzhlMjAzNiIsIm5iZiI6MTcxOTY3MTU0Mi40OTE3MSwic3ViIjoiNjY3ZWFmOTE3ZTk0ZDI0M2E2NmU1NzcyIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.Ro8j_Wc5ZfXlHEJVvewfdb5X4TzbwfYlHEXe1MfSA-s';

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${tokenAccess}`,
    },
  };
   try{
    const response=await fetch(baseURL, options);
    const data=await response.json();
    // console.log(data);
    return data;  
   }
   catch(error){
    // alert(error);
    console.log(error);
   }
};



