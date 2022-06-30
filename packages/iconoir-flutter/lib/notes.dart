import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Notes extends StatelessWidget {
  const Notes({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/Notes.svg');
}
