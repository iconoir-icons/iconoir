import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class AlbumCarousel extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const AlbumCarousel({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 19.4V4.6C2 4.26863 2.26863 4 2.6 4H17.4C17.7314 4 18 4.26863 18 4.6V19.4C18 19.7314 17.7314 20 17.4 20H2.6C2.26863 20 2 19.7314 2 19.4Z" stroke="currentColor" stroke-width="1.5"/>
<path d="M22 6V18" stroke="currentColor" stroke-linecap="round"/>
<path d="M11 14.5C11 15.3284 10.3284 16 9.5 16C8.67157 16 8 15.3284 8 14.5C8 13.6716 8.67157 13 9.5 13C10.3284 13 11 13.6716 11 14.5Z" fill="currentColor"/>
<path d="M11 14.5C11 15.3284 10.3284 16 9.5 16C8.67157 16 8 15.3284 8 14.5C8 13.6716 8.67157 13 9.5 13C10.3284 13 11 13.6716 11 14.5ZM11 14.5V8.6C11 8.26863 11.2686 8 11.6 8H13" stroke="currentColor" stroke-linecap="round"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}
