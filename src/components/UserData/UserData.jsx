import defaultImage from '../../images/ellipse.png';
export const UserData = () => {
  const imageUrl = defaultImage;

  return (
    <div>
      <p>
        My information:
        <div>
          <img src={imageUrl} alt="User avatar" />
          <button type="button"></button>
          <p>Edit photo</p>
          <ul>
            <li>
              <label>
                Name:
                <input type="text" />
              </label>
              <button type="button"></button>
            </li>
            <li>
              <label>
                Email:
                <input type="text" />
              </label>
              <button type="button"></button>
            </li>
            <li>
              <label>
                Birthday:
                <input type="text" />
              </label>
              <button type="button"></button>
            </li>
            <li>
              <label>
                Phone:
                <input type="text" />
              </label>
              <button type="button"></button>
            </li>
            <li>
              <label>
                City:
                <input type="text" />
              </label>
              <button type="button"></button>
            </li>
          </ul>
        </div>
      </p>
    </div>
  );
};
