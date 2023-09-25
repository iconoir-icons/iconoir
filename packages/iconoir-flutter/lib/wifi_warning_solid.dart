import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class WifiWarningSolid extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const WifiWarningSolid({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M1.75585 6.93924C4.94824 4.4957 8.36778 3.25 11.9994 3.25C15.631 3.25 19.0505 4.49571 22.2429 6.93926L22.2569 6.94997L22.2704 6.96133C22.8219 7.42615 22.9227 8.24336 22.4448 8.80815L12.99 19.9812C12.9435 20.0361 12.8926 20.0871 12.8377 20.1335C12.2905 20.5965 11.4717 20.5283 11.0087 19.9812L1.54257 8.79463L1.53183 8.78065C1.09232 8.20881 1.16834 7.38893 1.75585 6.93924ZM12 7.25C12.4142 7.25 12.75 7.58579 12.75 8V10C12.75 10.4142 12.4142 10.75 12 10.75C11.5858 10.75 11.25 10.4142 11.25 10V8C11.25 7.58579 11.5858 7.25 12 7.25ZM12.5675 14.5008C12.8446 14.1929 12.8196 13.7187 12.5117 13.4416C12.2038 13.1645 11.7296 13.1894 11.4525 13.4973L11.4425 13.5084C11.1654 13.8163 11.1904 14.2905 11.4983 14.5676C11.8062 14.8447 12.2804 14.8197 12.5575 14.5119L12.5675 14.5008Z" fill="currentColor"/>
</svg>
''',
        colorFilter:
            color != null ? ColorFilter.mode(color!, BlendMode.srcIn) : null,
        width: width,
        height: height,
      );
}