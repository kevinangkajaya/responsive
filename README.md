# Responsive
### Introduction
Setup separate screen between mobile (<768px) and desktop(>=768px)

### Installing as a package
`npm install @kevinangkajaya/responsive`

### Usage
```
import Responsive from '@kevinangkajaya/responsive';

return(
    <Responsive desktop={<div>
        This is desktop view
    </div>} mobile={<div>
        This is mobile view
    </div>}
    />
)
```

### Props 
| Name | Value | Default | Description  |
| ------------- | ------------- | --- | -----|
| desktop | JSX | (null) | Shows this JSX component when screen is desktop |
| mobile | JSX | (null) | Shows this JSX component when screen is mobile |

### Return Value
JSX Component