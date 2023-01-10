import './Roadmap.css';

  const Roadmap = (props) => {
    return (
        <div className="lb_timeline-container" style={{ overflowX: 'scroll' }}>
          {props.events.map((event) => (
            <section key={event.id} className="lb_timeline-event">
              <h3 className="lb_event-title">{event.title}</h3>
              <p className="lb_event-description">{event.description}</p>
              <span className="lb_event-date">{event.date}</span>
            </section>
          ))}
        </div>
      );
  };
  
  export default Roadmap;