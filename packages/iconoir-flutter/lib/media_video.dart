import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class MediaVideo extends StatelessWidget {
  const MediaVideo({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/MediaVideo.svg');
}
