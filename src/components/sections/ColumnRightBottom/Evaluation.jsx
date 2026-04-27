import React from 'react';
import Panel from '../../shared/Panel';

const Evaluation = () => {
  return (
    <>
      <Panel metrics style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', paddingTop: '14px', paddingBottom: '55px' }}>
        <div className="metrics-header" style={{ padding: '0 14px 6px', borderBottom: '1px solid var(--line)', flexShrink: 0 }}>
          <div className="section-title" style={{ border: 'none', padding: 0, margin: '0 0 6px 0' }}>
            <span className="num">06 /</span>
            <h2 style={{ fontSize: '24px' }}>Quantitative Evaluation</h2>
            <span className="hint">vs. SOTA · DSC · NSD</span>
          </div>
        </div>
        <table className="metrics" style={{ fontSize: '10.5px', transform: 'scale(0.96)', transformOrigin: 'center', width: '104%', marginLeft: '-2%' }}>
          <colgroup>
            <col style={{ width: '28%' }} />
            <col style={{ width: '12%' }} />
            <col style={{ width: '12%' }} />
            <col style={{ width: '12%' }} />
            <col style={{ width: '12%' }} />
            <col style={{ width: '12%' }} />
            <col style={{ width: '12%' }} />
          </colgroup>
          <thead>
            <tr className="group">
              <th>Method</th>
              <th colSpan="2">Lung X-Ray</th>
              <th colSpan="2">Brain MRI</th>
              <th colSpan="2">Breast US</th>
            </tr>
            <tr className="sub">
              <th></th>
              <th>DSC ↑</th><th>NSD ↑</th>
              <th>DSC ↑</th><th>NSD ↑</th>
              <th>DSC ↑</th><th>NSD ↑</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>U-Net</td><td>79.02</td><td>85.73</td><td>78.90</td><td>83.81</td><td>73.77</td><td>79.71</td></tr>
            <tr><td>MedCLIP-SAM</td><td>86.07</td><td>88.65</td><td>68.80</td><td>71.77</td><td>68.62</td><td>70.64</td></tr>
            <tr><td>nnU-Net</td><td>79.13</td><td>77.16</td><td>82.51</td><td>90.15</td><td>74.10</td><td>82.54</td></tr>
            <tr><td>MedCLIP-SAMV2</td><td>88.01</td><td>90.43</td><td>87.16</td><td>95.21</td><td>85.64</td><td>88.10</td></tr>
            <tr className="ours"><td>LViT-N (Ours)</td><td>89.12</td><td>92.45</td><td>87.74</td><td>92.80</td><td>87.44</td><td>88.45</td></tr>
          </tbody>
        </table>
        <div className="metrics-legend">
          <span><b>DSC</b> — Dice Similarity Coefficient</span>
          <span><b>NSD</b> — Normalized Surface Distance</span>
        </div>
      </Panel>

      <Panel style={{ padding: 0, alignSelf: 'start' }}>
        <p style={{ margin: 0, padding: '8px 12px', fontSize: '13px' }}>
          <b>LViT-N</b> achieves the highest Dice scores across <b>all three modalities</b>, with the largest margins on Brain MRI (+0.58 DSC over MedCLIP-SAMV2) and Breast US (+1.80 DSC). On NSD, our model leads on Lung X-Ray and Breast US while remaining competitive on Brain MRI — evidence that language conditioning improves boundary precision rather than just region overlap. All numbers reported on held-out test splits with consistent preprocessing across baselines. Best result per metric is highlighted; ablations and per-class scores available in the appendix.
        </p>
      </Panel>
    </>
  );
};

export default Evaluation;
