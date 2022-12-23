import {
  Button,
  Heading,
  Image,
  Input,
  Text,
  Textarea,
} from "@chakra-ui/react";
import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

function WritePost() {
  let [img, setimg] = useState("");
  let [body, setbody] = useState("");
  let [title, settitle] = useState("");
  let [category, setsetcategory] = useState("");
  let x;
  if (typeof window !== "undefined") {
    x = JSON.parse(sessionStorage.getItem("data")) || "";
    console.log(x.token);
  }
  let route=useRouter()

  let addpost = async () => {
    let headersList = {
      Accept: "*/*",
      authorization: `bearer ${x?.token}`,
      "Content-Type": "application/json",
    };

    let bodyContent = JSON.stringify({
      title: title,
      img: img,
      body: body,
      category: category,
    });

    let reqOptions = {
      url: "https://zany-red-toad-cape.cyclic.app/blog",
      method: "POST",
      headers: headersList,
      data: bodyContent,
    };

    let response = await axios.request(reqOptions);
    // alert(response);
    console.log(response.data);
    setbody("");
    setimg("");
    setsetcategory("");
    settitle("");
    route.push("/")
  };

  useEffect(() => {
    // console.log(JSON.parse(body));
  });

  return (
    <div style={{ width: "80%", margin: "auto" }}>
      <br />
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Heading>Publish a Article</Heading>
        <Button onClick={addpost} colorScheme={"teal"}>
          Post
        </Button>
      </div>
      {img.length > 0 && (
        <div>
          <br />
          <Image src={img} alt="dfjkgh" />
        </div>
      )}
      <br />
      {/* {body} */}
      <div>
        <Input
          placeholder="Topic"
          border={"none"}
          fontSize="5xl"
          size="xl"
          focusBorderColor="white"
          value={title}
          onChange={(e) => settitle(e.target.value)}
        />
      </div>

      {
        <div>
          <br />
          <Input
            placeholder="㊉ Add Category"
            border={"none"}
            fontSize="2xl"
            size="xl"
            value={category}
            onChange={(e) => setsetcategory(e.target.value)}
            focusBorderColor="white"
          />
        </div>
      }
      {img.length == 0 && (
        <div>
          <br />
          <Input
            placeholder="㊉ Add a Image"
            border={"none"}
            fontSize="2xl"
            size="xl"
            value={img}
            onChange={(e) => setimg(e.target.value)}
            focusBorderColor="white"
          />
        </div>
      )}

      <br />
      <div>
        <Textarea
          placeholder="㊉ Tell Your Story"
          border={"none"}
          fontSize="2xl"
          size="xl"
          height={"500px"}
          focusBorderColor="white"
          value={body}
          onChange={(e) => setbody(e.target.value)}
        />
      </div>
    </div>
  );
}

export default WritePost;
