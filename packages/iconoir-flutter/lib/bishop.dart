import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Bishop extends StatelessWidget {
  const Bishop({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/Bishop.svg');
}
