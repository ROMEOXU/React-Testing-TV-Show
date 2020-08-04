import React from "react";
import { render } from "@testing-library/react";
import Episodes from './Episodes';

const episodesFixture = {
    id:2993,
    url:"http://www.tvmaze.com/shows/2993/stranger-things",
    name:"Season 3 Suzie",
    type:"Scripted",
    language:"English",
    genres:["Drama","Fantasy"],
}
test("Render episodes component without errors", () =>{
    render(<Episodes episodes={[]} />);
})
test("Episode's content",()=>{
    const { queryAllByTestId, rerender } = render(<Episodes episodes={[]} />);
     expect(queryAllByTestId("episodes")).toStrictEqual([]);
      rerender(<Episodes episodes={[episodesFixture]}/>);
    expect(queryAllByTestId("episodes")).toHaveLength(1);
})