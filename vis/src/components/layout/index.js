import "./index.css";

import ChartHeader from "../chart-header";
import InfoList from "../info-list";
import CountsBar from "../counts-bar";
import DifChart from "../dif-chart";
import ICClueChart from "../ic-clue-chart";
import SkeletonChart from "../skeleton-chart";
import SearchBar from "../search-bar";
import CombineTable from "../combine-table";
import MainView from "../main-view";
import ConclusionText from "../conclusion-text";
import IndustryStackChart from "../industry-stack-chart";
import ClueDense from "../clue-dense";
import CrutialPath from "../crutial-path";
import { useEffect, useState } from "react";

export default function Layout() {
  // const [countsBarWidth, setCountsBarWidth] = useState(0);
  // const [countsBarHeight, setCountsBarHeight] = useState(0);
  const [difChartWidth, setDifChartWidth] = useState(0);
  const [difChartHeight, setDifChartHeight] = useState(0);
  const [icClueChartWidth, setIcClueChartWidth] = useState(0);
  const [icClueChartHeight, setIcClueChartHeight] = useState(0);
  const [skeletonChartWidth, setSkeletonChartWidth] = useState(0);
  const [skeletonChartHeight, setSkeletonChartHeight] = useState(0);
  const [combineTableWidth, setCombineTableWidth] = useState(0);
  const [combineTableHeight, setCombineTableHeight] = useState(0);
  const [mainChartWidth, setMainChartWidth] = useState(0);
  const [mainChartHeight, setMainChartHeight] = useState(0);
  const [industryStackChartWidth, setIndustryStackChartWidth] = useState(0);
  const [industryStackChartHeight, setIndustryStackChartHeight] = useState(0);
  const [cluedenseWidth, setClueDenseWidth] = useState(0);
  const [cluedenseHeight, setClueDenseHeight] = useState(0);
  const [crutialPathWidth, setCrutialPathWidth] = useState(0);
  const [crutialPathHeight, setCrutialPathHeight] = useState(0);

  useEffect(() => {
    // setCountsBarWidth(
    //   document.getElementById("statistic").getBoundingClientRect().width
    // );
    // setCountsBarHeight(
    //   document.getElementById("statistic").getBoundingClientRect().height
    // );
    
    setDifChartWidth(
      document.getElementById("deleterelation").getBoundingClientRect().width
    );
    setDifChartHeight(
      document.getElementById("deleterelation").getBoundingClientRect().height
    );
    setIcClueChartWidth(
      document.getElementById("icclue-graph").getBoundingClientRect().width
    );
    setIcClueChartHeight(
      document.getElementById("icclue-graph").getBoundingClientRect().height
    );
    setSkeletonChartWidth(
      document.getElementById("skeleton-chart").getBoundingClientRect().width
    );
    setSkeletonChartHeight(
      document.getElementById("skeleton-chart").getBoundingClientRect().height
    );
    setCombineTableWidth(
      document.getElementById("sta-node").getBoundingClientRect().width
    );
    setCombineTableHeight(
      document.getElementById("sta-node").getBoundingClientRect().height
    );
    setMainChartWidth(
      document.getElementById("mainmap").getBoundingClientRect().width
    );
    setMainChartHeight(870);
    // setMainChartHeight(1300)
    ;
    setIndustryStackChartWidth(
      document.getElementById("asset").getBoundingClientRect().width
    );
    setIndustryStackChartHeight(
      document.getElementById("asset").getBoundingClientRect().height
    );
    setCrutialPathWidth(
      document.getElementById("crutial-path").getBoundingClientRect().width
    );
    setCrutialPathHeight(
      document.getElementById("crutial-path").getBoundingClientRect().height
    );
    setClueDenseWidth(
      document.getElementById("clue-dense-chart").getBoundingClientRect().width
    );
    setClueDenseHeight(
      document.getElementById("clue-dense-chart").getBoundingClientRect().height
    );
  });

  return (
    <div id="layout">
      <div id="identifygroup">
        <div id="ileft">
          <div id="titlebar">???????????????????????????????????????</div>
          <div id="searchbar">
            <SearchBar />
          </div>
          <div id="overviewic">
            <ChartHeader chartName={"???????????????????????????"} />
            <ClueDense w={cluedenseWidth} h={cluedenseHeight} />
          </div>
          <div id="filteric">
            <ChartHeader chartName={"IP | Cert ?????????"} />
            <ICClueChart w={icClueChartWidth} h={icClueChartHeight} />
          </div>
        </div>
        <div id="iright">
          <div id="container-mainmap">
            <div id="mainmap">
              <ChartHeader chartName={"???????????????????????????"} />
              <MainView w={mainChartWidth} h={mainChartHeight} />
            </div>
          </div>
          <div id="container-filter">
            <div id="nodelinkic">
              <ChartHeader chartName={"IP-Cert?????????"} />
              <SkeletonChart w={skeletonChartWidth} h={skeletonChartHeight} />
            </div>
            <div id="deleterelation">
              <ChartHeader chartName={"?????????????????????"} />
              <DifChart w={difChartWidth} h={difChartHeight} />
            </div>
          </div>
        </div>
      </div>
      <div id="analyzegroup">
        <div id="infotable">
          <ChartHeader chartName={"??????????????????"} />
          <InfoList />
        </div>
        <div id="container-statistic">
          <ChartHeader chartName={"??????????????????"} />
          <div id="sta-node">
            <CombineTable
              w={combineTableWidth}
              h={combineTableHeight}
              b="node"
            />
          </div>
          <div id="divider"></div>
          <div id="sta-link">
            <CombineTable
              w={combineTableWidth}
              h={combineTableHeight}
              b="link"
            />
          </div>
        </div>
        <div id="asset">
          <ChartHeader chartName={"??????????????????"} />
          <IndustryStackChart
            w={industryStackChartWidth}
            h={industryStackChartHeight}
          />
        </div>
        <div id="keypath">
          <ChartHeader chartName={"??????????????????"} />
          <CrutialPath w={crutialPathWidth} h={crutialPathHeight} />
        </div>
        <div id="conclusion">
          <ChartHeader chartName={"??????????????????"} />
          <ConclusionText />
        </div>
      </div>
    </div>
  );
}
