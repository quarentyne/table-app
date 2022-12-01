

export const Loading = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <svg xmlns="http://www.w3.org/2000/svg" width="237px" height="237px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
        <rect x="16.5" y="23" width="17" height="54" fill="#8cd0e5">
          <animate attributeName="y" repeatCount="indefinite" dur="0.9615384615384615s" calcMode="spline" keyTimes="0;0.5;1" values="12.200000000000003;23;23" keySplines="0 0.5 0.5 1;0 0.5 0.5 1" begin="-0.19230769230769232s"></animate>
          <animate attributeName="height" repeatCount="indefinite" dur="0.9615384615384615s" calcMode="spline" keyTimes="0;0.5;1" values="75.6;54;54" keySplines="0 0.5 0.5 1;0 0.5 0.5 1" begin="-0.19230769230769232s"></animate>
        </rect>
        <rect x="41.5" y="23" width="17" height="54" fill="#376888">
          <animate attributeName="y" repeatCount="indefinite" dur="0.9615384615384615s" calcMode="spline" keyTimes="0;0.5;1" values="14.900000000000006;23;23" keySplines="0 0.5 0.5 1;0 0.5 0.5 1" begin="-0.09615384615384616s"></animate>
          <animate attributeName="height" repeatCount="indefinite" dur="0.9615384615384615s" calcMode="spline" keyTimes="0;0.5;1" values="70.19999999999999;54;54" keySplines="0 0.5 0.5 1;0 0.5 0.5 1" begin="-0.09615384615384616s"></animate>
        </rect>
        <rect x="66.5" y="23" width="17" height="54" fill="#826b88">
          <animate attributeName="y" repeatCount="indefinite" dur="0.9615384615384615s" calcMode="spline" keyTimes="0;0.5;1" values="14.900000000000006;23;23" keySplines="0 0.5 0.5 1;0 0.5 0.5 1"></animate>
          <animate attributeName="height" repeatCount="indefinite" dur="0.9615384615384615s" calcMode="spline" keyTimes="0;0.5;1" values="70.19999999999999;54;54" keySplines="0 0.5 0.5 1;0 0.5 0.5 1"></animate>
        </rect>
      </svg>
    </div>
  );
}