import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class AlbumOpen extends StatelessWidget {
  const AlbumOpen({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/AlbumOpen.svg');
}
