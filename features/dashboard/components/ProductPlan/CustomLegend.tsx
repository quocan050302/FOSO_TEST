export const CustomLegend: React.FC = (props: any) => {
  const { payload } = props;

  return (
    <div className="flex gap-4 justify-end">
      {payload.map((entry: any, index: number) => (
        <div key={index} className="flex items-center mb-2">
          <div
            style={{
              width: '27px',
              height: '13px',
              borderRadius: '20px',
              backgroundColor: entry.payload.fill,
              marginRight: '8px',
            }}
          ></div>
          <span>{entry.payload.name}</span>
        </div>
      ))}
    </div>
  );
};
