import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class SeaAndSun extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const SeaAndSun({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3 15C5.48276 15 7.34483 12 7.34483 12C7.34483 12 9.2069 15 11.6897 15C14.1724 15 16.6552 12 16.6552 12C16.6552 12 19.1379 15 21 15" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 20C5.48276 20 7.34483 17 7.34483 17C7.34483 17 9.2069 20 11.6897 20C14.1724 20 16.6552 17 16.6552 17C16.6552 17 19.1379 20 21 20" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M19 10C19 6.13401 15.866 3 12 3C8.13401 3 5 6.13401 5 10" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}
