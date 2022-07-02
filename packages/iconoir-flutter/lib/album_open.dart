import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class AlbumOpen extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const AlbumOpen({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15 2.19995C19.5645 3.12649 23 7.162 23 11.9999C23 16.8378 19.5645 20.8733 15 21.7999" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15 9C16.1411 9.28364 17 10.519 17 12C17 13.481 16.1411 14.7164 15 15" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M1 2L11 2L11 22L1 22" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M4 15.5C4 16.3284 3.32843 17 2.5 17C1.67157 17 1 16.3284 1 15.5C1 14.6716 1.67157 14 2.5 14C3.32843 14 4 14.6716 4 15.5Z" fill="currentColor"/>
<path d="M4 15.5C4 16.3284 3.32843 17 2.5 17C1.67157 17 1 16.3284 1 15.5C1 14.6716 1.67157 14 2.5 14C3.32843 14 4 14.6716 4 15.5ZM4 15.5V7.6C4 7.26863 4.26863 7 4.6 7H7" stroke="currentColor" stroke-linecap="round"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}
