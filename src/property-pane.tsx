const PropertyPane = (props: any) => {
  return (
    <>
      <div className="property-panel-section">
        <div className="property-panel-header">{props.title}</div>
        <div className="property-panel-content">{props.children}</div>
      </div>
    </>
  );
};

export default PropertyPane;
