import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class AlbumList extends StatelessWidget {
  const AlbumList({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/AlbumList.svg');
}
