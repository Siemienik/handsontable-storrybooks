import React from "react";
import { ScoreRenderer, PromotionRenderer } from "./renderers";
import { HotTable, HotColumn } from "@handsontable/react";

export class ObjectDataSource extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hotSettings: {
        // you can define the data as an array of objects
        data: [
          {
            id: 1,
            name: "Alex",
            score: 10,
            isPromoted: false
          },
          {
            id: 2,
            name: "Adam",
            score: 55,
            isPromoted: false
          },
          {
            id: 3,
            name: "Kate",
            score: 61,
            isPromoted: true
          },
          {
            id: 5,
            name: "Max",
            score: 98,
            isPromoted: true
          },
          {
            id: 6,
            name: "Lucy",
            score: 59,
            isPromoted: false
          },
          {
            id: 7,
            name: "Max",
            score: 70,
            isPromoted: true
          },
          {
            id: 8,
            name: "Lucas",
            score: 3,
            isPromoted: false
          },
          {
            id: 9,
            name: "Mary",
            score: 99,
            isPromoted: true
          },
          {
            id: 10,
            name: "Andy",
            score: 13,
            isPromoted: false
          }
        ],
        licenseKey: "non-commercial-and-evaluation",
        ...this.props
      }
    };
  }

  render() {
    return (
      <HotTable settings={this.state.hotSettings}>
        {/* use data prop to make a reference to the column data*/}
        <HotColumn data="id" />
        <HotColumn data="name" />
        <HotColumn data="score">
          <ScoreRenderer hot-renderer />
        </HotColumn>
        <HotColumn data="isPromoted">
          <PromotionRenderer hot-renderer />
        </HotColumn>
      </HotTable>
    );
  }
}
