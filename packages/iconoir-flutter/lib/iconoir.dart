import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Iconoir extends StatelessWidget {
  const Iconoir({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/Iconoir.svg');
}
