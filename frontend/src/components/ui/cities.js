import React from "react";
import { Carousel } from "react-carousel-minimal";
//new

function Cities() {
  const data_1 = [
    {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/GoldenGateBridge-001.jpg/1200px-GoldenGateBridge-001.jpg",
      caption: `<div>
                  San Francisco
                  <br/>
                  Next line
                </div>`,
    },
    {
      image:
        "https://cdn.britannica.com/s:800x450,c:crop/35/204435-138-2F2B745A/Time-lapse-hyper-lapse-Isle-Skye-Scotland.jpg",
      caption: "Scotland",
    },
    {
      image:
        "https://static2.tripoto.com/media/filter/tst/img/735873/TripDocument/1537686560_1537686557954.jpg",
      caption: "Darjeeling",
    },
    {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Palace_of_Fine_Arts_%2816794p%29.jpg/1200px-Palace_of_Fine_Arts_%2816794p%29.jpg",
      caption: "San Francisco",
    },
    {
      image:
        "https://i.natgeofe.com/n/f7732389-a045-402c-bf39-cb4eda39e786/scotland_travel_4x3.jpg",
      caption: "Scotland",
    },
    {
      image:
        "https://www.tusktravel.com/blog/wp-content/uploads/2020/07/Best-Time-to-Visit-Darjeeling-for-Honeymoon.jpg",
      caption: "Darjeeling",
    },
    {
      image:
        "https://www.omm.com/~/media/images/site/locations/san_francisco_780x520px.ashx",
      caption: "San Francisco",
    },
    {
      image:
        "https://images.ctfassets.net/bth3mlrehms2/6Ypj2Qd3m3jQk6ygmpsNAM/61d2f8cb9f939beed918971b9bc59bcd/Scotland.jpg?w=750&h=422&fl=progressive&q=50&fm=jpg",
      caption: "Scotland",
    },
    {
      image:
        "https://www.oyorooms.com/travel-guide/wp-content/uploads/2019/02/summer-7.jpg",
      caption: "Darjeeling",
    },
    {
      image:
        "https://www.flydubai.com/ar/media/Sharm-El-Sheikh-1920x720_tcm9-162670.jpg",
      caption: `<div>
                  شرم الشيخ
                `,
    },
    {
      image:
        "https://www.bayut.jo/blog/wp-content/uploads/2015/05/%D8%AA%D8%B9%D8%B1%D9%81-%D8%B9%D9%84%D9%89-%D8%A3%D9%81%D8%B6%D9%84-%D9%81%D9%86%D8%A7%D8%AF%D9%82-%D8%A7%D9%84%D8%B9%D9%82%D8%A8%D8%A9.jpg",
      caption: "العقبة",
    },
    {
      image:
        "https://tourflag.com/wp-content/uploads/%D8%B5%D8%AE%D9%88%D8%B1-%D8%A7%D9%84%D8%B7%D9%8A%D9%88%D8%B1-%D8%A8%D9%85%D9%86%D8%B7%D9%82%D8%A9-%D8%A7%D9%84%D8%B1%D9%88%D8%B4%D8%A9.jpg",
      caption: "بيروت",
    },
    {
      image: "http://static.menara.ma/content/uploads/2019/11/tanger.jpg",
      caption: "طنجة",
    },
    {
      image:
        "https://www.urtrips.com/wp-content/uploads/2018/08/Alexanderia-Corniche.jpg",
      caption: "الاسكندرية",
    },
    {
      image:
        "https://mosafir24.com/wp-content/uploads/2020/08/%D8%A7%D9%84%D8%AF%D9%84%D9%8A%D9%84-%D8%A7%D9%84%D8%B3%D9%8A%D8%A7%D8%AD%D9%8A-%D8%A7%D9%84%D8%B4%D8%A7%D9%85%D9%84-%D9%84%D8%A3%D9%87%D9%85-%D8%A7%D9%84%D9%85%D8%B2%D8%A7%D8%B1%D8%A7%D8%AA-%D9%88%D8%A7%D9%84%D9%85%D8%AF%D9%86-%D8%A7%D9%84%D8%B3%D9%8A%D8%A7%D8%AD%D9%8A%D8%A9-%D9%81%D9%8A-%D8%AA%D9%88%D9%86%D8%B3-scaled.jpg",
      caption: "تونس",
    },

    {
      image: "https://www.azdo.ly/wp-content/uploads/2020/04/tripoli-libya.jpg",
      caption: "طرابلس ",
    },
    {
      image:
        "https://scontent.ffjr1-4.fna.fbcdn.net/v/t31.18172-8/p720x720/27500851_10156487889558968_6174329973944459914_o.jpg?_nc_cat=107&ccb=1-5&_nc_sid=730e14&_nc_ohc=DL4bHZvaeQkAX-9YAEy&_nc_ht=scontent.ffjr1-4.fna&oh=ce965e9ae0aaac727a25815158048722&oe=6162B106",
      caption: "الجزائر",
    },
  ];

  const captionStyle = {
    fontSize: "2em",
    fontWeight: "bold",
  };
  const slideNumberStyle = {
    fontSize: "20px",
    fontWeight: "bold",
  };
  return (
    <div className="App1">
      <div style={{ textAlign: "center" }}>
        <h1>Explore The World !</h1>
        <div
          style={{
            padding: "0 20px",
          }}
        >
          <Carousel
            data={data_1}
            time={3000}
            width="850px"
            height="500px"
            captionStyle={captionStyle}
            radius="10px"
            slideNumber={false}
            slideNumberStyle={slideNumberStyle}
            captionPosition="bottom"
            automatic={true}
            dots={true}
            pauseIconColor="white"
            pauseIconSize="40px"
            slideBackgroundColor="darkgrey"
            slideImageFit="cover"
            thumbnails={true}
            thumbnailWidth="100px"
            style={{
              textAlign: "center",
              maxWidth: "50vw",
              maxHeight: "500px",
              margin: "40px auto",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Cities;
