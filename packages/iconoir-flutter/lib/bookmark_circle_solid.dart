import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class BookmarkCircleSolid extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const BookmarkCircleSolid({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25ZM11 7.25C9.48122 7.25 8.25 8.48122 8.25 10V16C8.25 16.2766 8.40224 16.5307 8.64611 16.6613C8.88997 16.7918 9.18588 16.7775 9.41603 16.624L11.3066 15.3636C11.7265 15.0837 12.2735 15.0837 12.6934 15.3636L14.584 16.624C14.8141 16.7775 15.11 16.7918 15.3539 16.6613C15.5978 16.5307 15.75 16.2766 15.75 16V10C15.75 8.48122 14.5188 7.25 13 7.25H11Z" fill="currentColor"/>
</svg>
''',
        colorFilter:
            color != null ? ColorFilter.mode(color!, BlendMode.srcIn) : null,
        width: width,
        height: height,
      );
}