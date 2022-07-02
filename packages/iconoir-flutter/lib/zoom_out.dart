import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class ZoomOut extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const ZoomOut({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9 11H11H13" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16 16L20 20" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M4 11C4 14.866 7.13401 18 11 18C12.9363 18 14.6891 17.2138 15.9563 15.9432C17.2192 14.6769 18 12.9296 18 11C18 7.13401 14.866 4 11 4C7.13401 4 4 7.13401 4 11Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}
