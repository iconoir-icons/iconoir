import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Bin extends StatelessWidget {
  const Bin({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/Bin.svg');
}
