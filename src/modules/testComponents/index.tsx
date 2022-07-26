/* eslint-disable */
import { Card } from '../../components/testComponents/Card';
import {
  CardContent,
  Collapse,
  Expand,
} from '../../components/testComponents/CardCompound';
import {
  withTextColor,
  withOpacityHover,
  Text2,
} from '../../components/testComponents/componentHOC';
import {
  Block,
  MouseTracker,
} from '../../components/testComponents/MouseTracker';
import { MouseTrackerGetterRender } from '../../components/testComponents/MouseTrackerGetterRender';

const TextRed = withTextColor(Text2)('red');
const TextBlue = withTextColor(withOpacityHover(Text2)(0.3))('blue');

export const TestComponent = () => {
  const list = ['test1', 'test2', 'test3', 'test4', 'test5'];
  return (
    <div>
      <TextRed>Este Texto es Rojo</TextRed>
      <TextBlue>Este Texto es Azul y con opacidad</TextBlue>
      <MouseTrackerGetterRender>
        {(position: any) => <Block position={position} />}
      </MouseTrackerGetterRender>
      {/* <MouseTracker
        render={(position: any) => <Block position={position} />}
      /> */}
      {/* <Card>
        <CardContent>
          {list.map((item, index) => (
             <p key={index}> {item}</p>
          ))}
        </CardContent>

        <Expand>
          <div>show more</div>
        </Expand>

        <Collapse>
          <div>show less</div>
        </Collapse>
      </Card> */}
    </div>
  );
};
