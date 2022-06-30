import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class CompactDisc extends StatelessWidget {
  const CompactDisc({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/CompactDisc.svg');
}
