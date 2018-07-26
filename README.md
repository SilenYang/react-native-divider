# react-native-divider

a divider component for react-native

# Install

```js
yarn add react-native-divider
// or
npm install react-native-divider --save
```

# usage

```js
import Divider from 'react-native-divider';

<Divider>Divider</Divider>;
```

![default](./Images/default.jpg)

# Props

| Prop          | Type                          | default           | Description                                                    |
| ------------- | ----------------------------- | ----------------- | -------------------------------------------------------------- |
| `dashed`      | Boolean                       | false             | whether line is dashed                                         |
| `orientation` | enum: `left` `center` `right` | left              | this is optional, if not set it will have the text in the left |
| `borderColor` | String                        | `#e8e8e8`         | line color                                                     |
| `color`       | String                        | `rgba(0,0,0,.85)` | font color                                                     |

example:

```js
import Divider from 'react-native-divider';

<Divider borderColor="#fff" color="#fff" orientation="center">
    Divider
</Divider>;
```

![color](./Images/colors.jpg)
