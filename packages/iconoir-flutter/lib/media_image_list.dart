import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class MediaImageList extends StatelessWidget {
  const MediaImageList({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/MediaImageList.svg');
}
